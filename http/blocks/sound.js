// Sound tone
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ks5cc9
Blockly.Blocks['ev3sound_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play a");
    this.appendValueInput("HZ")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Hz tone for");
    this.appendValueInput("TIME")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('');
  }
};
Blockly.Python['ev3sound_tone'] = function(block) {
  var value_hz = Blockly.Python.valueToCode(block, 'HZ', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  var code = 'ev3.Sound.playTone(hz = ' + value_hz + ', seconds = ' + value_time + ')\n';
  return code;
};

// Sound speak
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#r5v8mv
Blockly.Blocks['ev3sound_speak'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Say");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('');
  }
};
Blockly.Python['ev3sound_speak'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var code = 'ev3.Sound.speak(text = ' + value_text + ')\n';
  return code;
};