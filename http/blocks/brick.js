// LED brightness
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vkutky
Blockly.Blocks['ev3brick_ledbrightness'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set the")
        .appendField(new Blockly.FieldDropdown([["Left Red", "left.[\"red\"]"], ["Left Green", "left.[\"green\"]"], ["Right Red", "right.[\"red\"]"], ["Right Green", "right.[\"green\"]"]]), "LED")
        .appendField("LED to");
    this.appendValueInput("BRIGHTNESS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
  }
};
Blockly.Python['ev3brick_ledbrightness'] = function(block) {
  var dropdown_led = block.getFieldValue('LED');
  var value_brightness = Blockly.Python.valueToCode(block, 'BRIGHTNESS', Blockly.Python.ORDER_ATOMIC);
  var code = 'ev3.LEDs.' + dropdown_led + '.brightness(' + Math.max(Math.floor(value_brightness * 2.56 - 1), 0) + ')\n';
  return code;
};

// LED colour
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#c3gcav
Blockly.Blocks['ev3brick_ledcolour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set the")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "BUTTON")
        .appendField("button to")
        .appendField(new Blockly.FieldDropdown([["Red", "RED"], ["Green", "GREEN"], ["Amber", "AMBER"], ["Orange", "ORANGE"], ["Yellow", "YELLOW"], ["Off", "OFF"]]), "COLOUR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
  }
};
Blockly.Python['ev3brick_ledcolour'] = function(block) {
  var dropdown_button = block.getFieldValue('BUTTON');
  var dropdown_colour = block.getFieldValue('COLOUR');
  var code = '';
  switch(dropdown_colour) {
  	case "RED":
  		code += "ev3.LEDs." + dropdown_button + '["red"].brightness(255)\n';
  		code += "ev3.LEDs." + dropdown_button + '["green"].brightness(0)\n';
  		break;
  	case "GREEN":
  		code += "ev3.LEDs." + dropdown_button + '["red"].brightness(0)\n';
  		code += "ev3.LEDs." + dropdown_button + '["green"].brightness(255)\n';
  		break;
  	case "AMBER":
  		code += "ev3.LEDs." + dropdown_button + '["red"].brightness(255)\n';
  		code += "ev3.LEDs." + dropdown_button + '["green"].brightness(255)\n';
  		break;
  	case "ORANGE":
  		code += "ev3.LEDs." + dropdown_button + '["red"].brightness(255)\n';
  		code += "ev3.LEDs." + dropdown_button + '["green"].brightness(127)\n';
  		break;
  	case "YELLOW":
  		code += "ev3.LEDs." + dropdown_button + '["red"].brightness(127)\n';
  		code += "ev3.LEDs." + dropdown_button + '["green"].brightness(255)\n';
  		break;
  	case "OFF":
  		code += "ev3.LEDs." + dropdown_button + '["red"].brightness(0)\n';
  		code += "ev3.LEDs." + dropdown_button + '["green"].brightness(0)\n';
  		break;
  }
  return code;
};