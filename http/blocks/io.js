// Motor on
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#8xxnwo
Blockly.Blocks['ev3io_motoron'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn on motor ")
        .appendField(new Blockly.FieldDropdown([["A", "outA"], ["B", "outB"], ["C", "outC"], ["D", "outD"]]), "PORT");
    this.appendValueInput("POWER")
        .setCheck("Number")
        .appendField(" at ");
    this.appendDummyInput()
        .appendField(" power");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_motoron'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var value_power = Blockly.Python.valueToCode(block, 'POWER', Blockly.Python.ORDER_ATOMIC);
  var code = 'ev3_motors["' + dropdown_port + '"].on(' + value_power + ')\n';
  return code;
};

// Motor off
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#cj62is
Blockly.Blocks['ev3io_motoroff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn off motor ")
        .appendField(new Blockly.FieldDropdown([["A", "outA"], ["B", "outB"], ["C", "outC"], ["D", "outD"]]), "PORT");
    this.appendDummyInput()
        .appendField(" by ")
        .appendField(new Blockly.FieldDropdown([["coasting", "coast"], ["braking", "brake"], ["holding", "hold"]]), "BRAKE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_motoroff'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var dropdown_brake = block.getFieldValue('BRAKE');
  var code = 'ev3_motors["' + dropdown_port + '"].off("' + dropdown_brake + '")\n';
  return code;
};

// Motor on for seconds
Blockly.Blocks['ev3io_motoronforseconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn on motor ")
        .appendField(new Blockly.FieldDropdown([["A", "outA"], ["B", "outB"], ["C", "outC"], ["D", "outD"]]), "PORT");
    this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField(" for");
    this.appendValueInput("POWER")
        .setCheck("Number")
        .appendField("seconds at");
    this.appendDummyInput()
        .appendField("power, then ")
        .appendField(new Blockly.FieldDropdown([["coast", "coast"], ["brake", "brake"], ["hold", "hold"]]), "BRAKE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_motoronforseconds'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var value_time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  var value_power = Blockly.Python.valueToCode(block, 'POWER', Blockly.Python.ORDER_ATOMIC);
  var dropdown_brake = block.getFieldValue('BRAKE');
  var code = 'ev3_motors[' + dropdown_port + '].onForSeconds(power = ' + value_power + ', seconds = ' + value_time + ', brake = ' + dropdown_brake + ')\n';
  return code;
};

// Motor on for degrees
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#a3a9h2
Blockly.Blocks['ev3io_motoronfordegrees'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate motor ")
        .appendField(new Blockly.FieldDropdown([["A", "outA"], ["B", "outB"], ["C", "outC"], ["D", "outD"]]), "PORT");
    this.appendValueInput("DEGREES")
        .setCheck("Number")
        .appendField(" for");
    this.appendValueInput("POWER")
        .setCheck("Number")
        .appendField("degrees at");
    this.appendDummyInput()
        .appendField("power, then ")
        .appendField(new Blockly.FieldDropdown([["coast", "coast"], ["brake", "brake"], ["hold", "hold"]]), "BRAKE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_motoronfordegrees'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var value_degrees = Blockly.Python.valueToCode(block, 'DEGREES', Blockly.Python.ORDER_ATOMIC);
  var value_power = Blockly.Python.valueToCode(block, 'POWER', Blockly.Python.ORDER_ATOMIC);
  var dropdown_brake = block.getFieldValue('BRAKE');
  var code = 'ev3_motors[' + dropdown_port + '].onForDegrees(power = ' + value_power + ', degrees = ' + value_degrees + ', brake = ' + dropdown_brake + ')\n';
  return code;
};

// Motor on for rotations
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ztzrgo
Blockly.Blocks['ev3io_motoronforrotations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotate motor ")
        .appendField(new Blockly.FieldDropdown([["A", "outA"], ["B", "outB"], ["C", "outC"], ["D", "outD"]]), "PORT");
    this.appendValueInput("ROTATIONS")
        .setCheck("Number")
        .appendField(" for");
    this.appendValueInput("POWER")
        .setCheck("Number")
        .appendField("rotations at");
    this.appendDummyInput()
        .appendField("power, then ")
        .appendField(new Blockly.FieldDropdown([["coast", "coast"], ["brake", "brake"], ["hold", "hold"]]), "BRAKE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_motoronforrotations'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var value_rotations = Blockly.Python.valueToCode(block, 'ROTATIONS', Blockly.Python.ORDER_ATOMIC);
  var value_power = Blockly.Python.valueToCode(block, 'POWER', Blockly.Python.ORDER_ATOMIC);
  var dropdown_brake = block.getFieldValue('BRAKE');
  var code = 'ev3_motors[' + dropdown_port + '].onForRotations(power = ' + value_power + ', rotations = ' + value_rotations + ', brake = ' + dropdown_brake + ')\n';
  return code;
};