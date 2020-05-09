import { ConstantMatcher } from "./constant-matcher";
import { It } from "../expected-expressions/expression-predicates";
import { createInjector, resolve } from "../../tests.components/resolve.builder";

describe("Constant matcher", () => {
    beforeEach(() => {
        createInjector([
            {provide: ConstantMatcher, useClass: ConstantMatcher, deps: []},
        ]);
    });

    it("Returns true when compared values are equal", () => {
        const left = 1;
        const right = 1;

        const matcher = resolve(ConstantMatcher);
        const actual = matcher.matched(left, right);

        expect(actual).toBe(true);
    });

    it("Returns false when compared values are not equal", () => {
        const left = 1;
        const right = 2;

        const matcher = resolve(ConstantMatcher);
        const actual = matcher.matched(left, right);

        expect(actual).toBe(false);
    });

    it("Returns true when right is a predicate that returns true", () => {
        const left = "left";
        const right = It.Is((instance) => {
            expect(instance).toBe(left);
            return true;
        });

        const matcher = resolve(ConstantMatcher);
        const actual = matcher.matched(left, right);

        expect(actual).toBe(true);
    });

    it("Returns false when right is a predicate that returns false", () => {
        const left = "left";
        const right = It.Is((instance) => {
            expect(instance).toBe(left);
            return false;
        });

        const matcher = resolve(ConstantMatcher);
        const actual = matcher.matched(left, right);

        expect(actual).toBe(false);
    });
});
