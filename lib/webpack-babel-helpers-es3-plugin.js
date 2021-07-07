module.exports = (function ()
{
    /**
     *  @typedef {import("webpack").Compiler} Compiler
     */

    /**
     *  @constructor
     */
    function WebpackBabelHelpersEs3Plugin()
    {}

    WebpackBabelHelpersEs3Plugin.prototype = {
        constructor : WebpackBabelHelpersEs3Plugin,

        /**
         *  @param {Compiler} compiler
         */
        apply : function apply(compiler)
        {
            compiler.hooks.normalModuleFactory.tap("WebpackBabelHelpersEs3Plugin", function (nmf)
            {
                nmf.hooks.beforeResolve.tap("WebpackBabelHelpersEs3Plugin", function (result)
                {
                    if(/^@babel\/runtime\/helpers\/wrapNativeSuper$/.test(result.request))
                    {
                        result.request = require.resolve("./helpers/wrap-native-super");
                    }
                });
            });
        }
    };

    return {
        WebpackBabelHelpersEs3Plugin : WebpackBabelHelpersEs3Plugin
    };
})();
