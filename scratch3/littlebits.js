class littleBits {
    //@author khanning, converted by powerbox1000
    getInfo() {
        return {
            "id": "littleBits",
            "name": "littleBits",
            "menuIconUri": "data:image/png;base64,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",
            "blocks": [{
                "opcode": "digitalWrite",
                "blockType": "command",
                "text": "set [pin] [val]",
                "arguments": {
                    "pin": {
                        "type": "string",
                        "menu": "outDPins",
                        "defaultValue": "d1"
                    },
                    "val": {
                        "type": "string",
                        "menu": "dOutp",
                        "defaultValue": "on"
                    }
                }
            }, {
                "opcode": "analogWrite",
                "blockType": "command",
                "text": "set [pin] to [val]",
                "arguments": {
                    "pin": {
                        "type": "string",
                        "menu": "outAPins",
                        "defaultValue": "d5"
                    },
                    "val": {
                        "type": "number",
                        "defaultValue": "255"
                    }
                }
            }, {
                "opcode": "digitalRead",
                "blockType": "Boolean",
                "text": "read [pin]",
                "arguments": {
                    "pin": {
                        "type": "string",
                        "menu": "inDPins",
                        "defaultValue": "d0"
                    }
                }
            }, {
                "opcode": "analogRead",
                "blockType": "reporter",
                "text": "read [pin]",
                "arguments": {
                    "pin": {
                        "type": "string",
                        "menu": "inAPins",
                        "defaultValue": "a0"
                    }
                }
            }, {
                "opcode": "whenDigitalRead",
                "blockType": "hat",
                "text": "when [pin] is [val]",
                "arguments": {
                    "pin": {
                        "type": "string",
                        "menu": "inDPins",
                        "defaultValue": "d0"
                    },
                    "val": {
                        "type": "string",
                        "menu": "dOutp",
                        "defaultValue": "on"
                    }
                }
            }, {
                "opcode": "whenAnalogRead",
                "blockType": "hat",
                "text": "when [pin] is [op] [val]",
                "arguments": {
                    "pin": {
                        "type": "string",
                        "menu": "inAPins",
                        "defaultValue": "a0"
                    },
                    "op": {
                        "type": "string",
                        "menu": "ops",
                        "defaultValue": ">"
                    },
                    "val": {
                        "type": "number",
                        "defaultValue": "100"
                    }
                }
            }, {
                "opcode": "mapValues",
                "blockType": "reporter",
                "text": "map [val] from [aMin] [aMax] to [bMin] [bMax]",
                "arguments": {
                    "val": {
                        "type": "number",
                        "defaultValue": 500
                    },
                    "aMin": {
                        "type": "number",
                        "defaultValue": 0
                    },
                    "aMax": {
                        "type": "number",
                        "defaultValue": 1023
                    },
                    "bMin": {
                        "type": "number",
                        "defaultValue": 0
                    },
                    "bMax": {
                        "type": "number",
                        "defaultValue": 255
                    }
                }
            }],
            "menus": {
                outDPins: this._formatMenu(['d1', 'd5', 'd9']),
                outAPins: this._formatMenu(['d5', 'd9']),
                inDPins: this._formatMenu(['d0', 'a0', 'a1']),
                inAPins: this._formatMenu(['a0', 'a1']),
                dOutp: this._formatMenu(['on', 'off']),
                ops: this._formatMenu(['>', '=', '<']),
            }
        };
    }
    digitalWrite({
        pin,
        val
    }) {
        var output = new Uint8Array(3);
        output[0] = 3;
        output[1] = outputPins[pin];
        if (val === 'on')
            output[2] = 1;
        else
            output[2] = 0;
        device.send(output.buffer);
    }
    analogWrite({
        pin,
        val
    }) {
        var output = new Uint8Array(3);
        output[0] = 2;
        output[1] = outputPins[pin];
        output[2] = val;
        device.send(output.buffer);
    }
    digitalRead({
        pin
    }) {
        if (inputVals[pin] > 0) return true;
        return false;
    }
    analogRead({
        pin
    }) {
        return inputVals[pin];
    }
    whenDigitalRead({
        pin,
        val
    }) {
        if (val === 'on')
            return ext.digitalRead(pin);
        else
            return ext.digitalRead(pin) === false;
    }
    whenAnalogRead({
        pin,
        op,
        val
    }) {
        if (op === '>')
            return inputVals[pin] > val;
        else if (op === '<')
            return inputVals[pin] < val;
        else if (op === '=')
            return inputVals[pin] === val;
        else
            return false;
    }
    mapValues({
        val,
        aMin,
        aMax,
        bMin,
        bMax
    }) {
        var output = (((bMax - bMin) * (val - aMin)) / (aMax - aMin)) + bMin;
        return Math.round(output);
    }
    _formatMenu(menu) {
        const m = [];
        for (let i = 0; i < menu.length; i++) {
            const obj = {};
            obj.text = menu[i];
            obj.value = i.toString();
            m.push(obj);
        }
        return m;
    }
}
Scratch.extensions.register(new littleBits());
