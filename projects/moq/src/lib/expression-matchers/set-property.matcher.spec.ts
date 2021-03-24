﻿import { SetPropertyInteraction } from "../interactions";
import { SetPropertyExpressionMatcher } from "./set-property.matcher";
import { SetPropertyExpression } from "../reflector/expressions";
import { ConstantMatcher } from "./constant.matcher";
import { createInjector2, resolve2, resolveMock } from "../../tests.components/resolve.builder";

describe("Set property expression matcher", () => {

    beforeEach(() => {
        createInjector2(SetPropertyExpressionMatcher, [ConstantMatcher]);
    });

    it("Returns true when they are equal", () => {
        const name = "name";
        const value = "value";
        const left = new SetPropertyInteraction(name, value);
        const right = new SetPropertyExpression(name, value);

        resolveMock(ConstantMatcher)
            .setup(instance => instance.matched(value, value))
            .returns(true);

        const matcher = resolve2(SetPropertyExpressionMatcher);
        const actual = matcher.matched(left, right);

        expect(actual).toBe(true);
    });

    it("Returns false when left does not equal to right by name", () => {
        const value = "value";
        const left = new SetPropertyInteraction("left name", value);
        const right = new SetPropertyExpression("right name", value);

        resolveMock(ConstantMatcher)
            .setup(instance => instance.matched(value, value))
            .returns(true);

        const matcher = resolve2(SetPropertyExpressionMatcher);
        const actual = matcher.matched(left, right);

        expect(actual).toBe(false);
    });

    it("Returns false when left does not equal to right by value", () => {
        const name = "name";
        const leftValue = "left value";
        const rightValue = "right value";

        const left = new SetPropertyInteraction(name, leftValue);
        const right = new SetPropertyExpression(name, rightValue);

        resolveMock(ConstantMatcher)
            .setup(instance => instance.matched(leftValue, rightValue))
            .returns(false);

        const matcher = resolve2(SetPropertyExpressionMatcher);
        const actual = matcher.matched(left, right);

        expect(actual).toBe(false);
    });
});
