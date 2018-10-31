import React, { Component } from "react";

import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';

// markdown 문법 생삭
import 'codemirror/mode/markdown/markdown'; 
// markdown 내부에 들어가는 코드 색상
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
// CodeMirror를 위한 CSS 스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

const cx = classNames.bind(styles);

class EditorPane extends Component {

    editor = null; // editor ref
    codeMirror = null; // CodeMirror Instance
    cusor = null;

    _initializeEditor = () => {
        this.codeMirror = CodeMirror(this.editor, {
            mode: 'markdown',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true
        });
        this.codeMirror.on('change', this._handleChangeMarkdown);
    };

    _handleChange = (e) => {
        const { onChangeInput } = this.props;
        const { value, name } = e.target;
        onChangeInput({name, value});
    };

    _handleChangeMarkdown = (doc) => {
        const { onChangeInput } = this.props;
        this.cusor = doc.getCursor();
        onChangeInput({
            name: 'markdown',
            value: doc.getValue()
        });
    };

    componentDidMount() {
        this._initializeEditor();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.markDown !== this.props.markDown) {
            const { codeMirror, cursor} = this;
            if (!codeMirror) return;
            codeMirror.setValue(this.props.markDown);
            if (!cursor) return;
            codeMirror.setCursor(cursor);
        }
    }

    render() {
        const { _handleChange } = this;
        const { title, tags } = this.props;

        return (
            <div className={cx('editor-pane')}>
                <input className={cx('title')} 
                    placeholder='제목을 입력하세요' 
                    name='title'
                    value={title}
                    onChange={_handleChange}
                />
                <div className={cx('code-editor')} ref={ref => this.editor=ref}></div>
                <div className={cx('tags')}>
                    <div className={cx('description')}>태그</div>
                    <input name='tags' 
                        placeholder='태그를 입력하세요 (쉼표로 구분)'
                        value={tags}
                        onChange={_handleChange} 
                    />
                </div>
            </div>
        );
    };
};

export default EditorPane;