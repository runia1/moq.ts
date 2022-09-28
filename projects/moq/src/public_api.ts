/*
 * Public API Surface of moq.ts
*/
export * from "./lib/dump";
export * from "./lib/mock";
export * from "./lib/moq";
export * from "./lib/times";
export * from "./lib/auto-mocking/auto-mock-injector.config";
export * from "./lib/auto-mocking/auto-mock-options.builder";
export * from "./lib/auto-mocking/auto-mock.factory";
export * from "./lib/auto-mocking/auto-mock.provider";
export * from "./lib/auto-mocking/auto-mock.storage";
export * from "./lib/auto-mocking/index";
export * from "./lib/auto-mocking/root-mock.provider";
export * from "./lib/auto-mocking/expression.guards/complex-expression.guard";
export * from "./lib/auto-mocking/expression.guards/complex-expression.validator";
export * from "./lib/auto-mocking/expression.guards/expression-guard-exception.factory";
export * from "./lib/auto-mocking/expression.guards/expression.validator";
export * from "./lib/auto-mocking/expression.guards/function-expression.validator";
export * from "./lib/auto-mocking/expression.guards/get-property-expression.validator";
export * from "./lib/auto-mocking/expression.guards/in-operator-expression.validator";
export * from "./lib/auto-mocking/expression.guards/index";
export * from "./lib/auto-mocking/expression.guards/instance-method-expression.validator";
export * from "./lib/auto-mocking/expression.guards/new-operator-expression.validator";
export * from "./lib/auto-mocking/expression.guards/set-property-expression.validator";
export * from "./lib/auto-mocking/expression.guards/expression.formatters/complex-expression.error-formatter";
export * from "./lib/auto-mocking/expression.guards/expression.formatters/expression.formatter";
export * from "./lib/auto-mocking/expression.guards/expression.formatters/index";
export * from "./lib/auto-mocking/expression.guards/expression.formatters/string.error-styler";
export * from "./lib/auto-mocking/name-formatters/auto-mock-name.formatter";
export * from "./lib/auto-mocking/name-formatters/name-prefix.provider";
export * from "./lib/core/index";
export * from "./lib/core/mock-core";
export * from "./lib/equal-matchers/common-type.provider";
export * from "./lib/equal-matchers/date.matcher";
export * from "./lib/equal-matchers/equal-constant.matcher";
export * from "./lib/equal-matchers/equal.matcher";
export * from "./lib/equal-matchers/function.matcher";
export * from "./lib/equal-matchers/index";
export * from "./lib/equal-matchers/iterable.tester";
export * from "./lib/equal-matchers/iterator.matcher";
export * from "./lib/equal-matchers/map.matcher";
export * from "./lib/equal-matchers/object-map.provider";
export * from "./lib/equal-matchers/object-matcher.type";
export * from "./lib/equal-matchers/object-matchers.injection-token";
export * from "./lib/equal-matchers/object.matcher";
export * from "./lib/equal-matchers/pojo.matcher";
export * from "./lib/equal-matchers/primitive.matcher";
export * from "./lib/equal-matchers/types.matcher";
export * from "./lib/explorers/index";
export * from "./lib/explorers/reflect-has.injection-token";
export * from "./lib/explorers/has-method.explorer/expression.has-method.explorer";
export * from "./lib/explorers/has-method.explorer/has-method.explorer";
export * from "./lib/explorers/has-method.explorer/object.has-method.explorer";
export * from "./lib/explorers/has-method.explorer/preset.has-method.explorer";
export * from "./lib/explorers/has-property.explorer/expression-has-property.explorer";
export * from "./lib/explorers/has-property.explorer/has-property.explorer";
export * from "./lib/explorers/has-property.explorer/object-has-property.explorer";
export * from "./lib/explorers/has-property.explorer/preset-has-property.explorer";
export * from "./lib/explorers/has-property.explorer/property-is-read-only.tester";
export * from "./lib/explorers/in-operator-interaction.explorer/in-operator-interaction.explorer";
export * from "./lib/explorers/in-operator-interaction.explorer/preset.has-in-operator.explorer";
export * from "./lib/explorers/members.explorer/members-method.explorer";
export * from "./lib/explorers/members.explorer/members-property.explorer";
export * from "./lib/explorers/members.explorer/property-descriptor.provider";
export * from "./lib/expression.equality-comparers/arguments.equality-comparer";
export * from "./lib/expression.equality-comparers/constant.equality-comparer";
export * from "./lib/expression.equality-comparers/expression.equality-comparer";
export * from "./lib/expression.equality-comparers/get-property.equality-comparer";
export * from "./lib/expression.equality-comparers/in-operator.equality-comparer";
export * from "./lib/expression.equality-comparers/index";
export * from "./lib/expression.equality-comparers/instance-method.equality-comparer";
export * from "./lib/expression.equality-comparers/it.equality-comparer";
export * from "./lib/expression.equality-comparers/method.equality-comparer";
export * from "./lib/expression.equality-comparers/new-operator.equality-comparer";
export * from "./lib/expression.equality-comparers/set-property.equality-comparer";
export * from "./lib/formatters/constant.formatter";
export * from "./lib/formatters/expressions.formatter";
export * from "./lib/formatters/function.formatter";
export * from "./lib/formatters/get-property.formatter";
export * from "./lib/formatters/in-operator.formatter";
export * from "./lib/formatters/index";
export * from "./lib/formatters/interaction.formatter";
export * from "./lib/formatters/method.formatter";
export * from "./lib/formatters/new-operator.formatter";
export * from "./lib/formatters/property-key.formatter";
export * from "./lib/formatters/set-property.formatter";
export * from "./lib/formatters/tracked-expressions.formatter";
export * from "./lib/formatters/verify.formatter";
export * from "./lib/injector/default-injector.config";
export * from "./lib/injector/equal-matching-injector.config";
export * from "./lib/injector/injection-factory";
export * from "./lib/injector/injector.factory";
export * from "./lib/injector/mock-constructor.injection-token";
export * from "./lib/injector/mock.injection-token";
export * from "./lib/injector/root-mock.injection-token";
export * from "./lib/injector/typeof-injection-token";
export * from "./lib/interaction-players/callback-preset.player";
export * from "./lib/interaction-players/index";
export * from "./lib/interaction-players/interaction.player";
export * from "./lib/interaction-players/mimics-preset.player";
export * from "./lib/interaction-players/playable-preset.provider";
export * from "./lib/interaction-players/preset.player";
export * from "./lib/interaction-players/reflect-apply.injection-token";
export * from "./lib/interceptors/apply.trap";
export * from "./lib/interceptors/construct.trap";
export * from "./lib/interceptors/get-prototype-of.trap";
export * from "./lib/interceptors/get.trap";
export * from "./lib/interceptors/has.trap";
export * from "./lib/interceptors/index";
export * from "./lib/interceptors/properties-value.storage";
export * from "./lib/interceptors/prototype.storage";
export * from "./lib/interceptors/proxy.factory";
export * from "./lib/interceptors/set-prototype-of.trap";
export * from "./lib/interceptors/set.trap";
export * from "./lib/interceptors/spy-function.provider";
export * from "./lib/mock-options/mock-options.builder";
export * from "./lib/mock-options/mock-options.injection-token";
export * from "./lib/mock-options/mock-options.providers";
export * from "./lib/playables/index";
export * from "./lib/playables/play-times";
export * from "./lib/playables/playable-always";
export * from "./lib/playables/playable-exactly";
export * from "./lib/playables/playable-never";
export * from "./lib/playables/playable-once";
export * from "./lib/playables/playable-sequence";
export * from "./lib/playables/preset-playables.updater";
export * from "./lib/presets/index";
export * from "./lib/presets/preset-builder.factory";
export * from "./lib/presets/preset-builder";
export * from "./lib/presets/presets";
export * from "./lib/presets/rejected-promise.factory";
export * from "./lib/presets/resolved-promise.factory";
export * from "./lib/presets/setup.factory";
export * from "./lib/presets/factories/callback-preset.factory";
export * from "./lib/presets/factories/mimics-preset.factory";
export * from "./lib/presets/factories/mimics-rejected-async-preset.factory";
export * from "./lib/presets/factories/mimics-resolved-async-preset.factory";
export * from "./lib/presets/factories/returns-async-preset.factory";
export * from "./lib/presets/factories/returns-preset.factory";
export * from "./lib/presets/factories/throws-async-preset.factory";
export * from "./lib/presets/factories/throws-preset.factory";
export * from "./lib/presets/presets/callbacks.preset";
export * from "./lib/presets/presets/mimics.preset";
export * from "./lib/presets/presets/preset";
export * from "./lib/presets/presets/returns.preset";
export * from "./lib/presets/presets/throws.preset";
export * from "./lib/reflector/async-expression.detector";
export * from "./lib/reflector/async-expression.reflector";
export * from "./lib/reflector/async-reflecting-proxy.injector-factory";
export * from "./lib/reflector/composite-expression.reflector";
export * from "./lib/reflector/expression-predicates";
export * from "./lib/reflector/expression-reflector";
export * from "./lib/reflector/expressions";
export * from "./lib/reflector/index";
export * from "./lib/reflector/method-only-reflecting-proxy.factory";
export * from "./lib/reflector/method-reflecting-proxy.factory";
export * from "./lib/reflector/reflecting-proxy.factory";
export * from "./lib/reflector/reflecting-proxy.injector-factory";
export * from "./lib/reflector/sync-expression.reflector";
export * from "./lib/reflector/traps/apply.reflector-trap";
export * from "./lib/reflector/traps/construct.reflector-trap";
export * from "./lib/reflector/traps/get.reflector-trap";
export * from "./lib/reflector/traps/has.reflector-trap";
export * from "./lib/reflector/traps/method.reflector-trap";
export * from "./lib/reflector/traps/set.reflector-trap";
export * from "./lib/static.injector/forward_ref";
export * from "./lib/static.injector/injection_token";
export * from "./lib/static.injector/injector";
export * from "./lib/static.injector/injector_compatibility";
export * from "./lib/static.injector/metadata";
export * from "./lib/static.injector/property";
export * from "./lib/static.injector/stringify";
export * from "./lib/static.injector/type";
export * from "./lib/static.injector/interface/injector";
export * from "./lib/static.injector/interface/provider";
export * from "./lib/tracker/index";
export * from "./lib/tracker/sequence-id";
export * from "./lib/tracker/tracker";
export * from "./lib/verification/call-counter";
export * from "./lib/verification/index";
export * from "./lib/verification/verification-tester";
export * from "./lib/verification/verifier";
export * from "./lib/verification/verify-error";
