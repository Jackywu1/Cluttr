/* eslint-disable no-return-assign */
/* eslint-disable no-void */
/* eslint-disable no-shadow */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-cond-assign */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-func-assign */
/* eslint-disable no-restricted-globals */
/* eslint-disable global-require */
/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-prototype-builtins */
/* eslint-disable camelcase */
/* eslint-disable block-scoped-var */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('graphql'))
    : typeof define === 'function' && define.amd ? define(['exports', 'graphql'], factory)
      : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.GraphQLNormalizr = {}, global.GraphQL));
}(this, ((exports, graphql) => {
  function _extends() {
    _extends = Object.assign || function (target) {
      for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i];

        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    const target = {};
    const sourceKeys = Object.keys(source);
    let key; let
      i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    let n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    let it;

    if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === 'number') {
        if (it) o = it;
        let i = 0;
        return function () {
          if (i >= o.length) {
            return {
              done: true,
            };
          }
          return {
            done: false,
            value: o[i++],
          };
        };
      }

      throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }

  /**
   * https://github.com/blakeembrey/pluralize
   */

  /* eslint-disable no-control-regex */
  const irregularPlurals = {
    i: 'we',
    me: 'us',
    he: 'they',
    she: 'they',
    them: 'them',
    myself: 'ourselves',
    yourself: 'yourselves',
    itself: 'themselves',
    herself: 'themselves',
    himself: 'themselves',
    themself: 'themselves',
    is: 'are',
    was: 'were',
    has: 'have',
    this: 'these',
    that: 'those',
    echo: 'echoes',
    dingo: 'dingoes',
    volcano: 'volcanoes',
    tornado: 'tornadoes',
    torpedo: 'torpedoes',
    genus: 'genera',
    viscus: 'viscera',
    stigma: 'stigmata',
    stoma: 'stomata',
    dogma: 'dogmata',
    lemma: 'lemmata',
    schema: 'schemata',
    anathema: 'anathemata',
    ox: 'oxen',
    axe: 'axes',
    die: 'dice',
    yes: 'yeses',
    foot: 'feet',
    eave: 'eaves',
    goose: 'geese',
    buffalo: 'buffaloes',
    tooth: 'teeth',
    quiz: 'quizzes',
    human: 'humans',
    proof: 'proofs',
    carve: 'carves',
    valve: 'valves',
    looey: 'looies',
    thief: 'thieves',
    groove: 'grooves',
    pickaxe: 'pickaxes',
    whiskey: 'whiskies',
    vita: 'vitae',
  };
  const uncountables = {
    adulthood: true,
    advice: true,
    agenda: true,
    aid: true,
    alcohol: true,
    ammo: true,
    anime: true,
    athletics: true,
    audio: true,
    bison: true,
    blood: true,
    bream: true,
    buffalo: true,
    butter: true,
    carp: true,
    cash: true,
    chassis: true,
    chess: true,
    clothing: true,
    cod: true,
    commerce: true,
    cooperation: true,
    corps: true,
    debris: true,
    diabetes: true,
    digestion: true,
    elk: true,
    energy: true,
    equipment: true,
    excretion: true,
    expertise: true,
    flounder: true,
    fun: true,
    gallows: true,
    garbage: true,
    graffiti: true,
    headquarters: true,
    health: true,
    herpes: true,
    highjinks: true,
    homework: true,
    housework: true,
    information: true,
    jeans: true,
    justice: true,
    kudos: true,
    labour: true,
    literature: true,
    machinery: true,
    mackerel: true,
    mail: true,
    media: true,
    mews: true,
    moose: true,
    music: true,
    mud: true,
    manga: true,
    news: true,
    pike: true,
    plankton: true,
    pliers: true,
    police: true,
    pollution: true,
    premises: true,
    rain: true,
    research: true,
    rice: true,
    salmon: true,
    scissors: true,
    series: true,
    sewage: true,
    shambles: true,
    shrimp: true,
    species: true,
    staff: true,
    swine: true,
    tennis: true,
    traffic: true,
    transportation: true,
    trout: true,
    tuna: true,
    wealth: true,
    welfare: true,
    whiting: true,
    wildebeest: true,
    wildlife: true,
    you: true,
  };
  const pluralRules = [[/s?$/i, 's'], [/[^\u0000-\u007F]$/i, '$0'], [/([^aeiou]ese)$/i, '$1'], [/(ax|test)is$/i, '$1es'], [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'], [/(e[mn]u)s?$/i, '$1s'], [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'], [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'], [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'], [/(seraph|cherub)(?:im)?$/i, '$1im'], [/(her|at|gr)o$/i, '$1oes'], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'], [/sis$/i, 'ses'], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/([^ch][ieo][ln])ey$/i, '$1ies'], [/(x|ch|ss|sh|zz)$/i, '$1es'], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'], [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'], [/(pe)(?:rson|ople)$/i, '$1ople'], [/(child)(?:ren)?$/i, '$1ren'], [/eaux$/i, '$0'], [/m[ae]n$/i, 'men'], [/thou/, 'you'], [/[^aeiou]ese$/i, '$0'], [/deer/i, '$0'], [/fish$/i, '$0'], [/measles$/i, '$0'], [/o[iu]s$/i, '$0'], [/pox$/i, '$0'], [/sheep$/i, '$0']];
  /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */

  function restoreCase(word, token) {
    // Tokens are an exact match.
    if (word === token) return token; // Upper cased words. E.g. "HELLO".

    if (word === word.toUpperCase()) return token.toUpperCase(); // Title cased words. E.g. "Title".

    if (word[0] === word[0].toUpperCase()) {
      return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
    } // Lower cased words. E.g. "test".

    return token.toLowerCase();
  }
  /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */

  function interpolate(str, args) {
    return str.replace(/\$(\d{1,2})/g, (match, index) => args[index] || '');
  }
  /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */

  function replace(word, rule) {
    return word.replace(rule[0], function (match, index) {
      const result = interpolate(rule[1], arguments);

      if (match === '') {
        return restoreCase(word[index - 1], result);
      }

      return restoreCase(match, result);
    });
  }
  /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */

  function sanitizeWord(token, word, rules, uncountables) {
    let sanitized = word; // Empty string or doesn't need fixing.

    if (!token.length || uncountables.hasOwnProperty(token)) {
      return sanitized;
    }

    for (var _iterator = _createForOfIteratorHelperLoose([].concat(rules).reverse()), _step; !(_step = _iterator()).done;) {
      const rule = _step.value;

      if (rule[0].test(word)) {
        sanitized = replace(word, rule);
        break;
      }
    }

    return sanitized;
  }

  const pluralize = function pluralize(word) {
    // Get the correct token and case restoration functions.
    const token = word.toLowerCase(); // Check against the keep object map.

    if (irregularPlurals.hasOwnProperty(token)) {
      return restoreCase(word, irregularPlurals[token]);
    } // Run all the rules against the word.

    return sanitizeWord(token, word, pluralRules, uncountables);
  };

  const buildNoTypenameError = function buildNoTypenameError(node) {
    return `[GraphQLNormalizr]: No "__typename" field found on node ${JSON.stringify(node)}`;
  };
  const hasField = function hasField(fieldName) {
    return function (set) {
      return set.some((_ref) => {
        const { alias } = _ref;
        const { name } = _ref;
        return (alias || name).value === fieldName;
      });
    };
  };
  const createField = function createField(name) {
    return {
      kind: 'Field',
      alias: undefined,
      name: {
        kind: 'Name',
        value: name,
      },
      arguments: [],
      directives: [],
      selectionSet: undefined,
    };
  };
  const toLists = function toLists(object) {
    if (object === void 0) {
      object = {};
    }

    return Object.entries(object).reduce((acc, _ref2) => {
      let _extends2;

      const key = _ref2[0];
      const value = _ref2[1];
      return { ...acc, ...(_extends2 = {}, _extends2[key] = Object.values(value), _extends2) };
    }, {});
  };
  const getIn = function getIn(obj, keys, defaultValue) {
    let result = obj;
    let index = 0;

    while (index < keys.length && result != null) {
      result = result[keys[index]];
      index += 1;
    }

    return keys.length === index && result !== undefined ? result : defaultValue;
  };

  /**
   * https://github.com/domchristie/humps
   */

  /* eslint-disable no-self-compare, no-useless-escape */
  const _isNumerical = function _isNumerical(obj) {
    obj -= 0;
    return obj === obj;
  };

  const separateWords = function separateWords(string, options) {
    options = options || {};
    const separator = options.separator || '_';
    const split = options.split || /(?=[A-Z])/;
    return string.split(split).join(separator);
  };

  const camelize = function camelize(string) {
    if (_isNumerical(string)) {
      return string;
    }

    string = string.replace(/[\-_\s]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : '')); // Ensure 1st char is always lowercase

    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };
  const pascalize = function pascalize(string) {
    const camelized = camelize(string); // Ensure 1st char is always uppercase

    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };
  const decamelize = function decamelize(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  function typeOf(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
  }
  function isType(type) {
    return function (value) {
      if (value === null) return type.toLowerCase() === 'null';
      if (typeof value === 'undefined') return type.toLowerCase() === 'undefined';
      return type.toLowerCase() === typeOf(value).toLowerCase();
    };
  }
  function isArray(value) {
    return isType('array')(value);
  }
  function isObject(value) {
    return isType('object')(value);
  }
  function isEmpty(value) {
    if (typeof value === 'string') return !value;
    if (isType('object')(value)) return !Object.values(value).length;
    if (isType('array')(value)) return !value.length;
    if (isType('Map')(value)) return !value.size;
    if (isType('Set')(value)) return !value.size;
    return false;
  }
  function isNil(value) {
    return value == null;
  }
  function isNotNil(value) {
    return !isNil(value);
  }
  function prop(path) {
    return function (obj) {
      return path.split('.').reduce((acc, curr) => {
        try {
          return typeof acc[curr] !== 'undefined' ? acc[curr] : undefined;
        } catch (e) {
          return undefined;
        }
      }, obj);
    };
  }
  function map(transform) {
    return function (list) {
      return list.map(transform);
    };
  }
  function toLower(str) {
    return str.toLowerCase();
  }
  function toUpper(str) {
    return str.toUpperCase();
  }
  const toCamel = camelize;
  const toSnake = decamelize;
  const toPascal = pascalize;
  function toKebab(str) {
    return decamelize(str).replace(/_/g, '-');
  }
  function isScalar(value) {
    return !isObject(value) && !isNil(value);
  }

  const CACHE_READ_ERROR = '[GraphQLNormalizr]: Could not read from cache';
  const CACHE_WRITE_ERROR = '[GraphQLNormalizr]: Could not write to cache';
  const PAGEINFO_WITH_USE_CONNECTIONS_FALSE = "[GraphQLNormalizr]: You are using the 'pageInfo' field but haven't set 'useConnections' to true";

  const casingMethodMap = {
    lower: toLower,
    upper: toUpper,
    kebab: toKebab,
    camel: toCamel,
    pascal: toPascal,
    snake: toSnake,
  };
  function GraphQLNormalizr(_temp) {
    const _ref = _temp === void 0 ? {} : _temp;
    const _ref$idKey = _ref.idKey;
    const idKey = _ref$idKey === void 0 ? 'id' : _ref$idKey;
    const _ref$typeMap = _ref.typeMap;
    const typeMap = _ref$typeMap === void 0 ? {} : _ref$typeMap;
    const _ref$caching = _ref.caching;
    const caching = _ref$caching === void 0 ? false : _ref$caching;
    const _ref$lists = _ref.lists;
    const lists = _ref$lists === void 0 ? false : _ref$lists;
    const _ref$typenames = _ref.typenames;
    const typenames = _ref$typenames === void 0 ? false : _ref$typenames;
    const _ref$plural = _ref.plural;
    const plural = _ref$plural === void 0 ? true : _ref$plural;
    const _ref$casing = _ref.casing;
    const casing = _ref$casing === void 0 ? 'camel' : _ref$casing;
    const _ref$useConnections = _ref.useConnections;
    const useConnections = _ref$useConnections === void 0 ? false : _ref$useConnections;
    const _ref$typePointers = _ref.typePointers;
    const typePointers = _ref$typePointers === void 0 ? false : _ref$typePointers;
    const _ref$exclude = _ref.exclude;
    const exclude = _ref$exclude === void 0 ? {} : _ref$exclude;

    const hasIdField = hasField(idKey);
    const hasTypeNameField = hasField('__typename');
    const hasEdgesField = hasField('edges');
    const idField = createField(idKey);
    const typeNameField = createField('__typename');
    const cache = new Map();

    function caseTransform(type) {
      let str = type;
      str = plural ? pluralize(str) : str;
      str = casingMethodMap[casing](str);
      return str;
    }

    function getEntityName(type, entities) {
      return typeMap[type] || entities[type] || caseTransform(type);
    }

    function mapper() {
      for (var _len = arguments.length, path = new Array(_len), _key = 0; _key < _len; _key++) {
        path[_key] = arguments[_key];
      }

      const entities = {};
      return typePointers ? function (item) {
        let _ref2;

        const _getIn = getIn(item, path, {});
        const typename = _getIn.__typename;
        const id = _getIn[idKey];

        entities[typename] = getEntityName(typename, entities);
        return _ref2 = {
          collection: getEntityName(typename, entities),
        }, _ref2[idKey] = id, _ref2;
      } : function (item) {
        return getIn(item, path, {})[idKey];
      };
    }

    function mapNestedValue(obj) {
      const object = { ...obj };

      !typenames && delete object.__typename;
      const res = Object.entries(object).reduce((acc, _ref3) => {
        let _extends2;

        const key = _ref3[0];
        const value = _ref3[1];
        return {
          ...acc,
          ...(_extends2 = {}, _extends2[key] = isObject(value) ? useConnections && value.hasOwnProperty('edges') ? value.edges.map(mapper('node')).filter(isNotNil) : (function () {
            const _v = prop(idKey)(value);

            const { __typename } = value;
            const _value = _objectWithoutPropertiesLoose(value, ['__typename']);

            return _v == null ? !typenames ? _value : value : _v;
          }()) : isArray(value) && !value.every(isScalar) ? map(mapper())(value) : value, _extends2),
        };
      }, {});
      return res;
    }

    function assoc(entity, value, normalized) {
      if (isNil(entity)) throw new Error(buildNoTypenameError(value));
      const id = value[idKey];
      if (isNil(id)) return;
      const existingEntities = normalized[entity];
      normalized[entity] = existingEntities || {};
      const existing = normalized[entity][id] || {};
      normalized[entity][id] = { ...existing, ...value };
    }

    function normalize(_ref4) {
      const { data } = _ref4;
      const paths = {};
      const entities = {};
      let normalized = {};

      try {
        let cached;
        caching && (cached = cache.get(JSON.stringify(data)));

        if (cached) {
          return cached;
        }
      } catch (e) {
        // eslint-disable-next-line
         console.warn(CACHE_READ_ERROR);
      }

      let warned = false;

      (function walk(root, path, stackEntity, stackValue) {
        if (path === void 0) {
          path = '';
        }

        if (root && Object.prototype.hasOwnProperty.call(root, 'pageInfo') && !useConnections) {
          !warned // eslint-disable-next-line
          && console.warn(PAGEINFO_WITH_USE_CONNECTIONS_FALSE);
          warned = true;
        }

        const _loop = function _loop() {
          const _Object$entries$_i = _Object$entries[_i];
          const key = _Object$entries$_i[0];
          const value = _Object$entries$_i[1];

          if (useConnections && !isNil(value) && value.hasOwnProperty('edges')) {
            value.edges.forEach((edge, i) => {
              if (edge && edge.node) {
                walk({
                  node: edge.node,
                }, `${path ? `${path}.` : ''}${key}.edges.${i}`);
              }
            });
          } else if ((isObject(value) || isArray(value)) && isEmpty(value)) {
            paths[path] = {
              done: true,
            };
          } else if (isObject(value) || isArray(value) && !value.every(isScalar)) {
            if (exclude[stackEntity] && exclude[stackEntity].includes(key)) {
              paths[path] = {
                done: true,
              };
            } else {
              const type = value.__typename;
              type && (entities[type] = getEntityName(type, entities));
              walk(value, `${path ? `${path}.` : ''}${key}`, entities[type], value);
            }
          } else if (!paths[path] && isNotNil(value)) {
            assoc(stackEntity, mapNestedValue(stackValue), normalized);
            paths[path] = {
              done: true,
            };
          }
        };

        for (var _i = 0, _Object$entries = Object.entries(root); _i < _Object$entries.length; _i++) {
          _loop();
        }
      }(data));

      try {
        caching && cache.set(JSON.stringify(data), normalized);
      } catch (e) {
        // eslint-disable-next-line
         console.warn(CACHE_WRITE_ERROR);
      }

      normalized = lists ? toLists(normalized) : normalized;
      return normalized;
    }

    const isInlineFragment = function isInlineFragment(node) {
      return node.kind === graphql.Kind.INLINE_FRAGMENT;
    };

    const connectionFields = ['edges', 'pageInfo'];
    const excludeMetaFields = useConnections ? function (node, key, parent, path) {
      return node.selections.some(isInlineFragment) || hasEdgesField(node.selections) || !isInlineFragment(parent) && connectionFields.includes(parent.name.value);
    } : function () {
      return false;
    };

    function addRequiredFields(query) {
      return graphql.visit(query, {
        SelectionSet: function SelectionSet(node, key, parent, path) {
          if (parent.kind === graphql.Kind.OPERATION_DEFINITION || excludeMetaFields(node, key, parent)) {
            return;
          }

          !hasIdField(node.selections) && node.selections.unshift(idField);
          !hasTypeNameField(node.selections) && node.selections.unshift(typeNameField);
          return node;
        },
      });
    }

    function parse(qs) {
      return addRequiredFields(graphql.parse(qs, {
        noLocation: true,
      }));
    }

    return {
      normalize,
      addRequiredFields,
      parse,
    };
  }

  exports.GraphQLNormalizr = GraphQLNormalizr;
  exports.camelize = camelize;
  exports.decamelize = decamelize;
  exports.pascalize = pascalize;
  exports.pluralize = pluralize;

  Object.defineProperty(exports, '__esModule', { value: true });
})));
