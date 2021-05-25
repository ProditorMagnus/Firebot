"use strict";

const replaceVariableManager = require("./replace-variable-manager");

exports.loadReplaceVariables = () => {
    [
        'active-chat-user-count',
        'arg-array',
        'arg-count',
        'arg',
        'array-add',
        'array-filter',
        'array-find',
        'array-join',
        'array-length',
        'array-remove',
        'array-reverse',
        'array-shuffle',
        'bot',
        'chat-message',
        'chat-messages',
        'cheer-bits',
        'cheer-message',
        'cheer-total-bits',
        'commafy',
        'command-trigger',
        'concat',
        'count',
        'counter',
        'currency',
        'current-viewer-count',
        'custom-role-user-count',
        'custom-variable',
        'custom-variable-created-data',
        'custom-variable-created-name',
        'custom-variable-expired-data',
        'custom-variable-expired-name',
        'date',
        'donation-amount-formatted',
        'donation-amount',
        'donation-from',
        'donation-message',
        'ensure-number',
        'eval-vars',
        'file-line-count',
        'follow-count',
        'game',
        'gift-count',
        'gift-duration',
        'gift-giver-user',
        'gift-receiver-user',
        'gift-sub-months',
        'gift-sub-type',
        'host-type',
        'host-viewer-count',
        'loop-count',
        'loop-item',
        'math',
        'max-ad-break-length',
        'moderator',
        'number-ceil',
        'number-floor',
        'number-max',
        'number-min',
        'number-round',
        'ordinal-indicator',
        'preset-list-arg',
        'profile-page-bytebin-token',
        'quote',
        'raid-viewer-count',
        'random-active-viewer',
        'random-number',
        'random-viewer',
        'random-reddit-image',
        'random-dad-joke',
        'random-advice',
        'read-api',
        'read-file',
        'regexExec',
        'regexTest',
        'reward-description',
        'reward-cost',
        'reward-image-url',
        'reward-message',
        'reward-name',
        'stream-audience',
        'stream-title',
        'streamer',
        'sub-count',
        'sub-message',
        'sub-months',
        'sub-streak',
        'sub-type',
        'target',
        'text-length',
        'text-lowercase',
        'text-replace',
        'text-scramble',
        'text-uppercase',
        'text-capitalize',
        'text-contains',
        'text-encode-for-url',
        'text-split',
        'text-substring',
        'text-trim',
        'textbox-input',
        'time',
        'timeout-duration',
        'top-currency-user',
        'top-currency',
        'top-view-time',
        'uptime',
        'user-avatar-url',
        'user-exists',
        'user-level',
        'user-metadata',
        'user-next-level-hearts',
        'user-rank-badge-url',
        'user-total-hearts',
        'user',
        'username',
        'usernameArray',
        'view-time',
        'whisper-message'
    ].forEach(filename => {
        let definition = require(`./builtin/${filename}.js`);
        replaceVariableManager.registerReplaceVariable(definition);
    });
};
