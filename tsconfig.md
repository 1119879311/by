```json
{
  "compilerOptions": {
    /*访问https:aka.ms/tsconfig阅读有关此文件的详细信息*/



    /*项目*/

    "incremental"：true，/*保存.tsbuildinfo文件以允许增量编译项目*/

    "composite"：true，/*启用允许TypeScript项目与项目引用一起使用的约束*/

    "tsBuildInfoFile"："./.tsbuildinfo"，/*指定.tsbuildinfo增量编译文件的路径*/

    "disableSourceOfProjectReferenceRedirect"：true，/*在引用复合项目时禁用首选源文件而不是声明文件*/

    "disableSolutionSearching"：true，/*编辑时选择项目退出多项目引用检查*/

    "disableReferencedProjectLoad"：true，/*减少TypeScript自动加载的项目数*/

  /*语言与环境*/

    "target"："es2016"/*为已发出的JavaScript设置JavaScript语言版本，并包含兼容的库声明。*/，

    "lib"：[]，/*指定一组描述目标运行时环境的绑定库声明文件*/

    "jsx"："preserve"，/*指定生成什么jsx代码*/

    "experialDecorators"：true/*启用对遗留实验装饰器的实验支持。*/，

    "emitDecoratorMetadata"：true/*为源文件中的修饰声明发出设计类型元数据。*/，

    "jsxFactory"：""，/*指定针对React JSX发射时使用的JSX工厂函数，例如"React.createElement"或"h"*/

    "jsxFragmentFactory"：""，/*指定针对React JSX发射的片段时用于片段的JSX片段引用，例如"React.Fraggment"或"Fragment"*/

    "jsxImportSource"：""，/*指定在使用'jsx: react-jsx*'时用于导入JSX工厂函数的模块说明符*/

    "reactNamespace"：""，/*指定为"createElement"调用的对象。这仅适用于以"反应"JSX发射为目标的情况*/

    "noLib"：true，/*禁止包含任何库文件，包括默认的lib.d.ts*/

    "useDefineForClassFields"：true，/*发出符合ECMAScript标准的类字段*/

    "moduleDetection"："auto"，/*控制检测模块格式JS文件的方法*/

    /*模块*/

    "module"："commonjs",/*指定生成的模块代码。*/

    "rootDir"："./"，/*指定源文件中的根文件夹*/

    "moduleRolution"："node10"，/*指定TypeScript如何从给定的模块说明符中查找文件*/

    "baseUrl"："./",/*指定用于解析非相对模块名称的基目录。*/

    "paths"：{},/*指定一组将导入重新映射到其他查找位置的条目。*/

    "rootDirs"：[]，/*允许在解析模块时将多个文件夹视为一个文件夹*/

    "typeRoots"：[]，/*指定多个类似'./node_modules/@types'*/

    "types"：[]，/*指定要包含但不在源文件中引用的类型包名称*/

    "allowUmdGlobalAccess"：true，/*允许从模块访问UMD全局变量*/

    "module后缀"：[]，/*解析模块时要搜索的文件名后缀列表*/

    "allowImportingTsExtensions"：true，/*允许导入包含TypeScript文件扩展名。要求设置"--moduleSolution绑定器"和"--noEmit"或"--emitDeclarationOnly"*/

    "resolvePackageJsonExports"：true，/*解析包导入时使用package.json的"exports"字段*/

    "resolvePackageJsonImports"：true，/*解析导入时使用package.json"imports"字段*/

    "customConditions"：[]，/*在解析导入时，除了解析程序特定的默认值之外，还要设置的条件*/

    "resolveJsonModule"：true，/*启用.json文件导入*/

    "allowArbitraryExtensions"：true，/*如果存在声明文件，则允许导入任何扩展名的文件*/

    "noResolve"：true，/*禁止"import"、"require"或"<reference>"扩展TypeScript应添加到项目中的文件数*/

   /*JavaScript支持*/

    "allowJs"：true，/*允许JavaScript文件成为程序的一部分。使用"checkJS"选项可以从这些文件中获取错误*/

    "checkJs"：true，/*在类型检查的JavaScript文件中启用错误报告*/

    "maxNodeModuleJsDepth"：1，/*指定用于从"node_modules"检查JavaScript文件的最大文件夹深度。仅适用于"allowJs"*/



    /*发射*/

    "declaration"：true/*从项目中的TypeScript和JavaScript文件生成.d.ts文件。*/，

    "declarationMap"：true，/*为d.ts文件创建源映射*/

    "emitDeclarationOnly"：true，/*仅输出d.ts文件，不输出JavaScript文件*/

    "sourceMap"：true，/*为发出的JavaScript文件创建源映射文件*/

    "inlineSourceMap"：true，/*在发出的JavaScript中包含sourcemap文件*/

    "outFile"："./"，/*指定一个将所有输出捆绑到一个JavaScript文件中的文件。如果"declaration"为true，则还会指定一个绑定所有.d.ts输出的文件*/

    "outDir"："./"，/*为所有发出的文件指定一个输出文件夹*/

    "removeComments"：true，/*禁止发布评论*/

    "noEmit"：true，/*禁止从编译中发射文件*/

    "importHelpers"：true，/*允许每个项目从tslib导入一次助手函数，而不是每个文件都包含这些函数*/

    "importsNotUsedAsValues"："remove"，/*为仅用于类型的导入指定发射/检查行为*/

    "downlevelIteration"：true，/*为迭代发出更兼容但冗长且性能较差的JavaScript*/

    "sourceRoot"：""，/*指定调试器查找引用源代码的根路径*/

    "mapRoot"：""，/*指定调试器应定位映射文件的位置，而不是生成的位置*/

    "inlineSources"：true，/*在发出的JavaScript内的源映射中包含源代码*/

    "emitBOM"：true，/*在输出文件的开头发出UTF-8字节顺序标记（BOM）*/

    "newLine"："crlf"，/*设置用于发送文件的换行符*/

    "stripInternal"：true，/*禁用在其JSDoc注释中包含"@internal"的发射声明*/

    "noEmitHelpers"：true，/*禁用在编译输出中生成自定义帮助程序函数，如"__extends"*/

    "noEmitOnError"：true，/*如果报告任何类型检查错误，则禁用发射文件*/

    "preserveConstEnums"：true，/*禁用擦除生成代码中的"const enum"声明*/

    "declarationDir"："./"，/*指定生成的声明文件的输出目录*/

    "preserveValueImports"：true，/*保留JavaScript输出中未使用的导入值，否则这些值将被删除*/

    /*互操作约束*/

    "isolatedModules"：true，/*确保每个文件都可以安全地进行传输，而不依赖于其他导入*/

    "verbatimModuleSyntax"：true，/*不要转换或消除任何未标记为仅类型的导入或导出，确保它们以基于"module"设置的输出文件格式写入*/

    "allowSyntheticDefaultImports"：true，/*当模块没有默认导出时，允许"从y导入x"*/

    "esModuleInterop"：true/*发出额外的JavaScript以简化对导入CommonJS模块的支持。这为类型兼容性启用了"allowSyntheticDefaultImports"。*/，

    "preserveSymlinks"：true，/*禁用将符号链接解析为其真实路径。这与节点中的相同标志相关*/

    "forceConsistentCasingInFileNames"：true/*确保导入时大小写正确。*/，



    /*类型检查*/

    "strict"：true/*启用所有严格类型检查选项。*/，

    "noImplicitAny"：true，/*为具有隐含"any"类型的表达式和声明启用错误报告*/

    "strictNullChecks"：true，/*类型检查时，请考虑"null"和"undefined"*/

    "strictFunctionTypes"：true，/*在分配函数时，请检查以确保参数和返回值与子类型兼容*/

    "strictBindCallApply"：true，/*检查"bind"、"call"和"apply"方法的参数是否与原始函数匹配*/

    "strictPropertyInitialization"：true，/*检查已声明但未在构造函数中设置的类属性*/

    "noImplicitThis"：true，/*当"this"的类型为"any"时启用错误报告*/

    "useUnknownCatchVariables"：true，/*将catch子句变量默认为"unknown"，而不是"any"*/

    "alwaysStrict"：true，/*确保始终发出"use strict"*/

    "noUnusedLocals"：true，/*在未读取局部变量时启用错误报告*/

    "noUnusedParameters"：true，/*在未读取函数参数时引发错误*/

    "exactOptionalPropertyTypes"：true，/*按写入方式解释可选属性类型，而不是添加"undefined"*/

    "noImplicitReturns"：true，/*为函数中未显式返回的代码路径启用错误报告*/

    "noFallthroughCasesInSwitch"：true，/*为switch语句中的失败案例启用错误报告*/

    "noUncheckedIndexedAccess"：true，/*当使用索引进行访问时，将"undefined"添加到类型中*/

    "noImplicitOverride"：true，/*确保用重写修饰符标记派生类中的重写成员*/

    "noPropertyAccessFromIndexSignature"：true，/*对使用索引类型声明的键强制使用索引访问者*/

    "allowUnusedLabels"：true，/*禁用未使用标签的错误报告*/

    "allowUnreachableCode"：true，/*禁用无法访问代码的错误报告*/



    /*完整性*/

    "skipDefaultLibCheck"：true，/*跳过TypeScript中包含的类型检查.d.ts文件*/

    "skipLibCheck"：true/*跳过所有.d.ts文件的类型检查*/
  }
}


```
