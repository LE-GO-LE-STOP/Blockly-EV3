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

//Set sensor
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#s3n4g6
Blockly.Blocks['ev3io_sensorset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.appendValueInput("TYPE")
        .setCheck("Sensor")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("as");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorset'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var value_type = Blockly.Python.valueToCode(block, 'TYPE', Blockly.Python.ORDER_ATOMIC);
  var code = 'ev3_sensors["' + dropdown_port + '"] = ' + value_type + '("' + dropdown_port + '")\n';
  return code;
};

// Touch sensor
Blockly.Blocks['ev3io_sensortouch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Touch Sensor");
    this.setInputsInline(true);
    this.setOutput(true, "Sensor");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensortouch'] = function(block) {
  var code = 'ev3.TouchSensor';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
// Touch sensor pressed
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wdhzqz
Blockly.Blocks['ev3io_sensortouch_pressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Touch sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.appendDummyInput()
        .appendField("is")
        .appendField(new Blockly.FieldDropdown([["pressed", "True"], ["released", "False"]]), "STATE");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensortouch_pressed'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var dropdown_state = block.getFieldValue('STATE');
  var code = 'ev3_sensors["' + dropdown_port + '"].pressed() == ' + dropdown_state;
  return [code, Blockly.Python.ORDER_RELATIONAL];
};

// Colour sensor
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#69k3qw
Blockly.Blocks['ev3io_sensorcolour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Colour Sensor");
    this.setInputsInline(true);
    this.setOutput(true, "Sensor");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorcolour'] = function(block) {
  var code = 'ev3.ColourSensor';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
// Colour sensor reflected
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#4bwab9
Blockly.Blocks['ev3io_sensorcolour_reflected'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reflected light at sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorcolour_reflected'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'ev3_sensors["' + dropdown_port + '"].reflected()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
// Colour sensor ambient
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nkv66f
Blockly.Blocks['ev3io_sensorcolour_ambient'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ambient light at sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorcolour_ambient'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'ev3_sensors["' + dropdown_port + '"].ambient()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
// Colour sensor colour
Blockly.Blocks['ev3io_sensorcolour_colour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Colour at sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.setInputsInline(true);
    this.setOutput(true, "EV3Colour");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorcolour_colour'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'ev3_sensors["' + dropdown_port + '"].colour()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

// Ultrasonic sensor
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hf7n2u
Blockly.Blocks['ev3io_sensorultrasonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ultrasonic Sensor");
    this.setInputsInline(true);
    this.setOutput(true, "Sensor");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorultrasonic'] = function(block) {
  var code = 'ev3.UltrasonicSensor';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
// Ultrasonic distance
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wsmde6
Blockly.Blocks['ev3io_sensorultrasonic_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Distance from sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorultrasonic_distance'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'ev3_sensors["' + dropdown_port + '"].distance()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
// Ultrasonic nearby
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bze5kw
Blockly.Blocks['ev3io_sensorultrasonic_nearby'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Other ultrasonic near sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorultrasonic_nearby'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'ev3_sensors["' + dropdown_port + '"].nearby()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

// Infrared sensor
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nowdkx
Blockly.Blocks['ev3io_sensorinfrared'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Infrared Sensor");
    this.setInputsInline(true);
    this.setOutput(true, "Sensor");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorinfrared'] = function(block) {
  var code = 'ev3.InfraredSensor';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
// Infrared proximity
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#6agwvo
Blockly.Blocks['ev3io_sensorinfrared_proximity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Proximity from sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorinfrared_proximity'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'ev3_sensors["' + dropdown_port + '"].proximity()';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
// Infrared seek heading
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#e4y985
Blockly.Blocks['ev3io_sensorinfrared_seekheading'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beacon direction from sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.appendDummyInput()
        .appendField("on channel")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "CHANNEL");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorinfrared_seekheading'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = 'ev3_sensors["' + dropdown_port + '"].seek(channel = ' + dropdown_channel + ')["heading"]';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
// Infrared seek proximity
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bbfkbr
Blockly.Blocks['ev3io_sensorinfrared_seekproximity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beacon proximity from sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT");
    this.appendDummyInput()
        .appendField("on channel")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "CHANNEL");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorinfrared_seekproximity'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var code = 'ev3_sensors["' + dropdown_port + '"].seek(channel = ' + dropdown_channel + ')["strength"]';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
// Infrared remote
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q4vjun
Blockly.Blocks['ev3io_sensorinfrared_remote'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button")
        .appendField(new Blockly.FieldDropdown([["Red Up", "[\"red\"][\"up\"]"], ["Red Down", "[\"red\"][\"down\"]"], ["Blue Up", "[\"blue\"][\"up\"]"], ["Blue Down", "[\"blue\"][\"down\"]"], ["Beacon", "[\"beacon\"]"]]), "BUTTON");
    this.appendDummyInput()
        .appendField("on channel")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "CHANNEL");
    this.appendDummyInput()
        .appendField("at sensor")
        .appendField(new Blockly.FieldDropdown([["1", "in1"], ["2", "in2"], ["3", "in3"], ["4", "in4"]]), "PORT")
        .appendField("is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(65);
    this.setTooltip('');
  }
};
Blockly.Python['ev3io_sensorinfrared_remote'] = function(block) {
  var dropdown_button = block.getFieldValue('BUTTON');
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var dropdown_port = block.getFieldValue('PORT');
  var code = 'ev3_sensors["' + dropdown_port + '"].remote(channel = ' + dropdown_channel + ')' + dropdown_button;
  return [code, Blockly.Python.ORDER_ATOMIC];
};