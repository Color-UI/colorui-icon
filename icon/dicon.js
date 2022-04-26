function ddicon() {
    return `
    @font-face {
        font-family: "ddicon"; /* Project id 2655228 */
        src: url("data:application/x-font-woff2;charset=utf-8;base64,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")
                format("woff2")
    }
    
    [class*="dicon-"] {
        font-family: "ddicon" !important;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    .dicon-select:before {
        content: "\\e645";
    }
    
    .dicon-gripper:before {
        content: "\\e646";
    }
    
    .dicon-tuichubaiban:before {
        content: "\\e644";
    }
    
    .dicon-kuaisujiarubaiban:before {
        content: "\\e643";
    }
    
    .dicon-wodebaiban:before {
        content: "\\e642";
    }
    
    .dicon-btn_xiayiye:before {
        content: "\\e640";
    }
    
    .dicon-btn_shangyiye:before {
        content: "\\e641";
    }
    
    .dicon-fuzhi:before {
        content: "\\e63f";
    }
    
    .dicon-fluent_delete-16-regular:before {
        content: "\\e63b";
    }
    
    .dicon-carbon_folder-move-to:before {
        content: "\\e63c";
    }
    
    .dicon-btn_chuangjian:before {
        content: "\\e63d";
    }
    
    .dicon-icon-park-outline_transaction-order:before {
        content: "\\e63e";
    }
    
    .dicon-a-bianzu6:before {
        content: "\\e63a";
    }
    
    .dicon-card_more:before {
        content: "\\e635";
    }
    
    .dicon-explain:before {
        content: "\\e636";
    }
    
    .dicon-hexagram:before {
        content: "\\e637";
    }
    .dicon-notice:before {
        content: "\\e62f";
    }
    
    .dicon-exit:before {
        content: "\\e631";
    }
    
    .dicon-order:before {
        content: "\\e632";
    }
    
    .dicon-set-line:before {
        content: "\\e633";
    }
    
    .dicon-camera:before {
        content: "\\e634";
    }
    
    .dicon-flow-modeler:before {
        content: "\\e62a";
    }
    
    .dicon-shuffle:before {
        content: "\\e62e";
    }
    
    .dicon-export-board:before {
        content: "\\e624";
    }
    
    .dicon-block-add:before {
        content: "\\e625";
    }
    
    .dicon-block-set:before {
        content: "\\e626";
    }
    .dicon-clear:before {
        content: "\\e623";
    }
    
    .dicon-lock-open:before {
        content: "\\e61b";
    }
    
    .dicon-flash:before {
        content: "\\e61c";
    }
    
    .dicon-picture:before {
        content: "\\e610";
    }
    
    .dicon-example:before {
        content: "\\e61f";
    }
    
    .dicon-lock:before {
        content: "\\e620";
    }
    
    .dicon-set:before {
        content: "\\e621";
    }
    .dicon-text-note:before {
        content: "\\e616";
    }
    
    .dicon-media-note:before {
        content: "\\e619";
    }
    
    .dicon-graffiti-note:before {
        content: "\\e61a";
    }
    
    .dicon-cloud-download:before {
        content: "\\e678";
    }
    
    .dicon-delete:before {
        content: "\\e607";
    }
    
    .dicon-exit-fullscreen:before {
        content: "\\e60f";
    }
    
    .dicon-mode-table:before {
        content: "\\e613";
    }
    
    .dicon-fullscreen:before {
        content: "\\e615";
    }
    
    .dicon-edit:before {
        content: "\\e617";
    }
    
    .dicon-mode-card:before {
        content: "\\e618";
    }
    
    .dicon-note-text:before {
        content: "\\e614";
    }
    
    .dicon-empty:before {
        content: "\\e611";
    }
    
    .dicon-refresh:before {
        content: "\\e61e";
    }
    
    .dicon-turn:before {
        content: "\\e60d";
    }
    
    .dicon-refresh:before {
        content: "\\e6a2";
    }
    
    .dicon-penline:before {
        content: "\\e60c";
    }
    
    .dicon-note-upload:before {
        content: "\\e609";
    }
    
    .dicon-note-pen:before {
        content: "\\e608";
    }
    
    .dicon-lasso:before {
        content: "\\e612";
    }
    
    .dicon-all-silent:before {
        content: "\\e605";
    }
    
    .dicon-turn-silent:before {
        content: "\\e602";
    }
    
    .dicon-record:before {
        content: "\\e630";
    }
    
    .dicon-data:before {
        content: "\\e639";
    }
    
    .dicon-smile:before {
        content: "\\e6b6";
    }
    
    .dicon-list:before {
        content: "\\e61d";
    }
    
    .dicon-line:before {
        content: "\\e6b5";
    }
    
    .dicon-import:before {
        content: "\\e622";
    }
    
    .dicon-shape:before {
        content: "\\e629";
    }
    
    .dicon-feedback:before {
        content: "\\e62c";
    }
    
    .dicon-template:before {
        content: "\\e62d";
    }
    
    .dicon-stance:before {
        content: "\\e628";
    }
    
    .dicon-redo:before {
        content: "\\e638";
    }
    
    .dicon-timing:before {
        content: "\\e627";
    }
    
    .dicon-silent:before {
        content: "\\e62b";
    }
    
    .dicon-pen:before {
        content: "\\e600";
    }
    
    .dicon-undo:before {
        content: "\\e601";
    }
    
    .dicon-more:before {
        content: "\\e603";
    }
    
    .dicon-note:before {
        content: "\\e604";
    }
    
    .dicon-link:before {
        content: "\\e606";
    }
    
    .dicon-sign:before {
        content: "\\e60a";
    }
    
    .dicon-mouse:before {
        content: "\\e60b";
    }
    
    .dicon-text:before {
        content: "\\e60e";
    }
    
    .dicon-image:before {
        content: "\\e610";
    }
    
    .dicon-media-note:before {
        content: "\\e619";
    }
    `
}

export default ddicon