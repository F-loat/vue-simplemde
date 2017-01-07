## [SimpleMDE 配置](https://github.com/NextStepWebs/simplemde-markdown-editor#configuration)

- **autoDownloadFontAwesome**: 如果设置为 `true`, force downloads Font Awesome (used for icons). If set to `false`, prevents downloading. Defaults to `undefined`, which will intelligently check whether Font Awesome has already been included, then download accordingly.
- **autofocus**: If set to `true`, autofocuses the editor. Defaults to `false`.
- **autosave**: *Saves the text that's being written and will load it back in the future. It will forget the text when the form it's contained in is submitted.*
  - **enabled**: If set to `true`, autosave the text. Defaults to `false`.
  - **delay**: Delay between saves, in milliseconds. Defaults to `10000` (10s).
  - **uniqueId**: You must set a unique string identifier so that SimpleMDE can autosave. Something that separates this from other instances of SimpleMDE elsewhere on your website.
- **blockStyles**: Customize how certain buttons that style blocks of text behave.
  - **bold** Can be set to `**` or `__`. Defaults to `**`.
  - **code** Can be set to  ```` ``` ```` or `~~~`.  Defaults to ```` ``` ````.
  - **italic** Can be set to `*` or `_`. Defaults to `*`.
- **element**: The DOM element for the textarea to use. Defaults to the first textarea on the page.
- **forceSync**: If set to `true`, force text changes made in SimpleMDE to be immediately stored in original textarea. Defaults to `false`.
- **hideIcons**: An array of icon names to hide. Can be used to hide specific icons shown by default without completely customizing the toolbar.
- **indentWithTabs**: If set to `false`, indent using spaces instead of tabs. Defaults to `true`.
- **initialValue**: If set, will customize the initial value of the editor.
- **insertTexts**: Customize how certain buttons that insert text behave. Takes an array with two elements. The first element will be the text inserted before the cursor or highlight, and the second element will be inserted after. For example, this is the default link value: `['[', '](http://)']`.
  - horizontalRule
  - image
  - link
  - table
- **lineWrapping**: If set to `false`, disable line wrapping. Defaults to `true`.
- **parsingConfig**: Adjust settings for parsing the Markdown during editing (not previewing).
  - **allowAtxHeaderWithoutSpace**: If set to `true`, will render headers without a space after the `#`. Defaults to `false`.
  - **strikethrough**: If set to `false`, will not process GFM strikethrough syntax. Defaults to `true`.
  - **underscoresBreakWords**: If set to `true`, let underscores be a delimiter for separating words. Defaults to `false`.
- **placeholder**: Custom placeholder that should be displayed
- **previewRender**: Custom function for parsing the plaintext Markdown and returning HTML. Used when user previews.
- **promptURLs**: If set to `true`, a JS alert window appears asking for the link or image URL. Defaults to `false`.
- **renderingConfig**: Adjust settings for parsing the Markdown during previewing (not editing).
  - **singleLineBreaks**: If set to `false`, disable parsing GFM single line breaks. Defaults to `true`.
  - **codeSyntaxHighlighting**: If set to `true`, will highlight using [highlight.js](https://github.com/isagalaev/highlight.js). Defaults to `false`. To use this feature you must include highlight.js on your page. For example, include the script and the CSS files like:<br>`<script src='https://cdn.jsdelivr.net/highlight.js/latest/highlight.min.js'></script>`<br>`<link rel='stylesheet' href='https://cdn.jsdelivr.net/highlight.js/latest/styles/github.min.css'>`
- **shortcuts**: Keyboard shortcuts associated with this instance. Defaults to the [array of shortcuts](#keyboard-shortcuts).
- **showIcons**: An array of icon names to show. Can be used to show specific icons hidden by default without completely customizing the toolbar.
- **spellChecker**: If set to `false`, disable the spell checker. Defaults to `true`.
- **status**: If set to `false`, hide the status bar. Defaults to the array of built-in status bar items.
  - Optionally, you can set an array of status bar items to include, and in what order. You can even define your own custom status bar items.
- **styleSelectedText**: If set to `false`, remove the `CodeMirror-selectedtext` class from selected lines. Defaults to `true`.
- **tabSize**: If set, customize the tab size. Defaults to `2`.
- **toolbar**: If set to `false`, hide the toolbar. Defaults to the [array of icons](#toolbar-icons).
- **toolbarTips**: If set to `false`, disable toolbar button tips. Defaults to `true`.

```JavaScript
// 以下大多数选项为非默认行为
export default {
  data () {
    return {
      configs: {
        autofocus: true,
        autosave: {
          enabled: true,
          uniqueId: 'MyUniqueID',
          delay: 1000
        },
        blockStyles: {
          bold: '__',
          italic: '_'
        },
        element: document.getElementById('MyID'),
        forceSync: true,
        hideIcons: ['guide', 'heading'],
        indentWithTabs: false,
        initialValue: 'Hello world!',
        insertTexts: {
          horizontalRule: ['', '\n\n-----\n\n'],
          image: ['![](http://', ')'],
          link: ['[', '](http://)'],
          table: ['', '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n']
        },
        lineWrapping: false,
        parsingConfig: {
          allowAtxHeaderWithoutSpace: true,
          strikethrough: false,
          underscoresBreakWords: true
        },
        placeholder: 'Type here...',
        previewRender: function(plainText) {
          return customMarkdownParser(plainText) // 返回HTML自定义解析器
        },
        previewRender: function(plainText, preview) { // 异步方法
          setTimeout(function () {
            preview.innerHTML = customMarkdownParser(plainText)
          }, 250)
          return '加载中...'
        },
        promptURLs: true,
        renderingConfig: {
          singleLineBreaks: false,
          codeSyntaxHighlighting: true
        },
        shortcuts: {
          drawTable: 'Cmd-Alt-T'
        },
        showIcons: ['code', 'table'],
        spellChecker: false,
        status: false,
        status: ['autosave', 'lines', 'words', 'cursor'], // Optional usage
        status: ['autosave', 'lines', 'words', 'cursor', {
          className: 'keystrokes',
          defaultValue: function(el) {
            this.keystrokes = 0
            el.innerHTML = '0 Keystrokes'
          },
          onUpdate: function(el) {
            el.innerHTML = ++this.keystrokes + ' Keystrokes'
          }
        }], // Another optional usage, with a custom status bar item that counts keystrokes
        styleSelectedText: false,
        tabSize: 4,
        toolbar: false,
        toolbarTips: false
      }
    }
  }
}
```

#### 工具栏

下面是内置的工具栏图标（只有一些默认启用），你可以根据喜好重新排列。如果按钮有快捷键，将自动显示提示（即如果把`action`设置为`toggleBold`，`title`设置`加粗`，最终的提示文本将为`加粗（Ctrl-B）`）。

此外，你可以在工具栏数组中任意两个图标之间添加一个分离线`'|'`。

name | action | title<br>className
:--- | :----- | :--------------
bold | toggleBold | 加粗<br>fa fa-bold
italic | toggleItalic | 斜体<br>fa fa-italic
strikethrough | toggleStrikethrough | 删除线<br>fa fa-strikethrough
heading | toggleHeadingSmaller | 标题<br>fa fa-header
heading-smaller | toggleHeadingSmaller | 缩小标题<br>fa fa-header
heading-bigger | toggleHeadingBigger | 增大标题<br>fa fa-lg fa-header
heading-1 | toggleHeading1 | 大标题<br>fa fa-header fa-header-x fa-header-1
heading-2 | toggleHeading2 | 中等标题<br>fa fa-header fa-header-x fa-header-2
heading-3 | toggleHeading3 | 小标题<br>fa fa-header fa-header-x fa-header-3
code | toggleCodeBlock | 代码块<br>fa fa-code
quote | toggleBlockquote | 引用<br>fa fa-quote-left
unordered-list | toggleUnorderedList | 无序列表<br>fa fa-list-ul
ordered-list | toggleOrderedList | 有序列表<br>fa fa-list-ol
clean-block | cleanBlock | 清除格式<br>fa fa-eraser fa-clean-block
link | drawLink | 插入链接<br>fa fa-link
image | drawImage | 插入图片<br>fa fa-picture-o
table | drawTable | 插入表格<br>fa fa-table
horizontal-rule | drawHorizontalRule | 插入水平线<br>fa fa-minus
preview | togglePreview | 预览<br>fa fa-eye no-disable
side-by-side | toggleSideBySide | 全屏预览<br>fa fa-columns no-disable no-mobile
fullscreen | toggleFullScreen | 全屏<br>fa fa-arrows-alt no-disable no-mobile
guide | [跳转链接](https://simplemde.com/markdown-guide) | Markdown引导<br>fa fa-question-circle

使用`toolbar`选项自定义工具栏：

```JavaScript
// 仅自定义现有按钮的顺序
export default {
  data () {
    return {
      configs: {
        toolbar: ['bold', 'italic', 'heading', '|', 'quote']
      }
    }
  }
}

// 自定义所有信息和/或添加你的图标
export default {
  data () {
    return {
      configs: {
        toolbar: [{
            name: 'bold',
            action: SimpleMDE.toggleBold,
            className: 'fa fa-bold',
            title: '加粗'
          },
          {
            name: 'custom',
            action: function customFunction (editor) {
              // 添加你的代码
            },
            className: 'fa fa-star',
            title: '自定义按钮'
          },
          '|' // 分隔符
          ...
        ]
      }
    }
  }
}
```

#### 快捷键

SimpleMDE带有预定义键盘快捷键的数组，可以用一个配置选项改变。默认的列表如下：

快捷键 | 操作
:------- | :-----
*Cmd-'* | '引用'
*Cmd-B* | '加粗'
*Cmd-E* | '清除格式'
*Cmd-H* | '缩小标题'
*Cmd-I* | '斜体'
*Cmd-K* | '插入链接'
*Cmd-L* | '插入无序列表'
*Cmd-P* | '预览'
*Cmd-Alt-C* | '插入代码块'
*Cmd-Alt-I* | '插入图片'
*Cmd-Alt-L* | '插入有序列表'
*Shift-Cmd-H* | '增大标题'
*F9* | '全屏预览'
*F11* | '全屏'

可以只修改部分快捷键，其他保持不变：

```JavaScript
export default {
  data () {
    return {
      configs: {
        shortcuts: {
          'toggleOrderedList': 'Ctrl-Alt-K', // 改变插入有序列表的快捷
          'toggleCodeBlock': null, // 不绑定插入代码块的快捷键
          'drawTable': 'Cmd-Alt-T' // 绑定没有预设快捷键的操作，插入表格
        }
      }
    }
  }
}
```

快捷键会在平台之间自动转换。如果你定义一个快捷键为“Cmd-B”，在PC机上的快捷键将更改为“Ctrl-B”。反之亦然。

可以绑定的操作列表与[工具栏按钮](#toolbar-icons)的内置操作列表相同。

#### 高度

改变最小高度:

```CSS
.markdown-editor .CodeMirror, .markdown-editor .CodeMirror-scroll {
  min-height: 200px;
}
```

设置高度为一个固定值:

```CSS
.markdown-editor .CodeMirror {
  height: 300px;
}
```