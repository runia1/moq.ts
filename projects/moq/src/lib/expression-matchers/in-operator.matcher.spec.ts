import { InOperatorInteraction } from "../interactions";
import { InOperatorExpression } from "../reflector/expressions";
import { InOperatorExpressionMatcher } from "./in-operator.matcher";
import { createInjector2, resolve2 } from "../../tests.components/resolve.builder";

describe("In operator expression matcher", () => {

    beforeEach(() => {
        createInjector2(InOperatorExpressionMatcher, []);
    });

    it("Returns true when they are equal", () => {
        const name = "name";
        const left = new InOperatorInteraction(name);
        const right = new InOperatorExpression(name);

        const matcher = resolve2(InOperatorExpressionMatcher);
        const actual = matcher.matched(left, right);

        expect(actual).toBe(true);
    });

    it("Returns false when left does not equal to right", () => {
        const left = new InOperatorInteraction("left name");
        const right = new InOperatorExpression("right name");

        const matcher = resolve2(InOperatorExpressionMatcher);
        const actual = matcher.matched(left, right);

        expect(actual).toBe(false);
    });
});
