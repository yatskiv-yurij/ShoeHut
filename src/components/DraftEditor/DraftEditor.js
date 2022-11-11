import React from 'react';
import { Editor, EditorState, getDefaultKeyBinding, RichUtils, ContentState, convertToRaw} from 'draft-js'; 
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
// import InnerHTML from 'dangerously-set-html-content';
import './editor.scss';

class DraftEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) =>{
            this.setState({editorState});
            props.setDataEditor(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        }

        try {
            if(this.props.dataEditor){
                const blocksFromHtml = htmlToDraft(this.props.dataEditor);
                this.state= { editorState: EditorState.createWithContent(ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap))};
            }
        } catch (err) {
            console.warm(err)
        }
       
            
        
        
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    }

    _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
        this.onChange(newState);
        return true;
        }
        return false;
    }

    _mapKeyToEditorCommand(e) {
        if (e.keyCode === 9 /* TAB */) {
        const newEditorState = RichUtils.onTab(
            e,
            this.state.editorState,
            4, /* maxDepth */
        );
        if (newEditorState !== this.state.editorState) {
            this.onChange(newEditorState);
        }
        return;
        }
        return getDefaultKeyBinding(e);
    }

    _toggleBlockType(blockType) {
        this.onChange(
        RichUtils.toggleBlockType(
            this.state.editorState,
            blockType
        )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
        RichUtils.toggleInlineStyle(
            this.state.editorState,
            inlineStyle
        )
        );
    }

    render() {
        const {editorState} = this.state;
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }
        return (
            <>
                {/* <InnerHTML html={markup} /> */}
                <div className="RichEditor-root">
                    <BlockStyleControls
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                    />
                    <InlineStyleControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}
                    />
                    <div className={className} onClick={this.focus}>
                    <Editor
                        // blockStyleFn={getBlockStyle}
                        // customStyleMap={styleMap}
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        keyBindingFn={this.mapKeyToEditorCommand}
                        onChange={this.onChange}
                        placeholder="Введіть опис товару"
                        // ref="editor"
                        // spellCheck={true}
                        // readOnly={false}
                    />
                    </div>
                </div>
            </>
        
        );
    }
    }

    // Custom overrides for "code" style.
    

    class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
        };
    }

    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
        className += ' RichEditor-activeButton';
        }

        return (
        <span className={className} onMouseDown={this.onToggle}>
            {this.props.label}
        </span>
        );
    }
    }

    const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
    ];

    const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="RichEditor-controls">
        {BLOCK_TYPES.map((type) =>
            <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
            />
        )}
        </div>
    );
    };

    var INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
    ];

    const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();
        
    return (
        <div className="RichEditor-controls">
        {INLINE_STYLES.map((type) =>
            <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
            />
        )}
        </div>
    );
};

export default DraftEditor;