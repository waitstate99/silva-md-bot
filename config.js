const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VW23LbNhD9F74GkxAgSIKeyUwlxY5kS7YU2Y3jTqYDiZBEiyJpXmTJGb/2tQ/9ivYP+jf9hH5Cz4K+5KFNXM1oRAKLs7tnzy70xcnypDInZu8cfHGKMtnq2tBjvS/w63SbxcKUDnNiXWvn4CdPMB5EjHOXSY6fiPmKBYqJgPEIeyrEL4s4C10Y4uv6TGLPxxkRMhwNORMuvWE18JjHODCF8JiAnYjwiA3hMuFFLJCf75lTNLM0mX8jKC4UUxIA8O2zgIDxhqCkx+CCw6WUTMGp7wMfj4DnIQuV9YRtjuMyhE+PhQgBZwJYcsrQt6tkLjwfWLBwP99TWDopk2x5WKzMxpQ6BYdjLL2MR6UoJKIQ/ghUCQaXXLIIpEUh8ScoWBYKpryWFWwp4itowwGfQhLnIJSOwtx1qRghGQT2DPLi3HsZi1QZpEvewSFBCw53wARJeKMFD0+KuTYI6baV9EAjGKUa0woUAE1ABdxtS0zBwtZlUcB8qj5TgWWwSpaZiQexyeqk3r9Yg6SrAMwJYHmhZY+jZAqvPqrJ/LAlhPnCqoiDIxAZ2YIjehDFiVsU2tbeBUckDgIgfSuiLmI4Gb2QOZdKIKlgtgh+i4ecQQQ8Q4rUMMSEtNr0IUGsBSGVXZFQkRF1DiIQD5qAHGnHpaAI2rNfn0XiK+7G5WPrrv+P+pAl6sfDsNW4bQfftjHEhOjBGHUQdE/6pxKTAn1LKChGPEQoKcOShuOSak8pUKOryAqFNELP1C8vYRGSEdSE8AI4YoemB0XAXUsEGoRGCiBtCyAyCgtEetzyRQOI25ILKVvpIVpqqyiy2cIU4uBAx76InojUdVN+T3EcUJhQ1jOFI0jOYMGn6catR6qpda6orlR7N2pZRNtSJ6pWi0STTSPAmx2Utou5fBiGLgkY4NRYQbtOem1Tavlo25Q82TVUAU2vAuuJpGjzBIME5/FWRjQoMBYirx2+wEAXwaYdQHbUQkWD2DngeCzNMqnqUtdJntk1QDk63k7NvDS1VZ0zOTx+NUrnvcV6Pdmq/qj/cczLO7FOi+Xd5a0bzibZtXcyPeqIi7dgsyjzuakqE/eBnJf7EV700lRg+DNzMrOrWz2TOwTtLJKyqi+ypkhzHT+K/XFTz+d5k9XTfTbv0QPqdeA+L5u6xnCuqKhNpsv5Ktma3krXWFnotDJPGZrSALEuG/M00nt5TCoYynA0eXd6jsg3Vh0JDJ0IM8KFmCIZegdS/lC9viVYXRSvM1PDNtNk7fz92y+///Xnr51Z3KQ/3+qVnmHlD+ynFkYFnqdcHinXEyogIFq/f0qA/MWm1kmKiJ3e8PJNWeT9w4H2tiP5/n1nvez0lh3nOeFHGbeVOQ1fdRe1H5dNcXd9LHtlvrw609Ojctb303C0nJXd7dn0eHuy6bz9FxAgvOHb5mqzG4w6R0V3t7v4uDyN92fyvJm9Ous1n3b5Sde9MUNVX9zc7HZrr3g36ZeH8pTvPxXzybAZp5fjSc+/mk7fHxXesHusP3zs3b4lb7HZJnPztTMxqd6MPqxM77i62ST9KZ8fXd1W0WI+SXuXq+npsHvdHQ+y49sfx5P4Wp+d8WI2uTNzdbQX5zdZuP00KWbjw/WHweXV1XDiZ0Fz0lnC2WODpw+3TGLVRqWk10Vi7MR8KNl3S9sGTgp0AfyM8TCD/2N6YG76drZz0f7vEXQb0f8SaWe77Wjp2mtT2FV7xfvM9rC009decjSvaTL67RVBdxVGEUfnc8w9WFswThd1RDcsmqpIdb3Iyw3CqjYzjaDKvKHOGGSL/Fv/T+CV0V2AkGgwpLqqO88dd55sTFXrTYG5EIY+bpAACVmrcZkXfV2tAOptUn49pfbZd4piWuNSemhgp0Of/smNc/8PDWdYg4IKAAA=",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "Silva MD",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "923201779473",
    OWNER_NAME:            process.env.OWNER_NAME || "Silva MD",
    DESCRIPTION:           process.env.DESCRIPTION || "Silva MD Bot",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG:              process.env.LIVE_MSG || "Silva MD is active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Silva MD",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'SILVA MD 💖 SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'silva').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
};
