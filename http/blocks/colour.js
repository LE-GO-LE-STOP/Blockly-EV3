// Colour picker
var colourChart = ["#cccccc", "#000000", "#33ccff", "#33cc00", "#ffff66", "#ff0000", "#ffffff", "#663300"];
Blockly.Blocks['ev3colour_picker'] = {
  init: function() {
  	var colourPicker = new Blockly.FieldColour(colourChart[0]);
  	colourPicker.setColours(colourChart).setColumns(1);
    this.appendDummyInput()
        .appendField(colourPicker, "COLOUR");
    this.setInputsInline(true);
    this.setOutput(true, "EV3Colour");
    this.setColour(30);
    this.setTooltip('');
  }
};
Blockly.Python['ev3colour_picker'] = function(block) {
  var colour_colour = block.getFieldValue('COLOUR');
  var code = colourChart.indexOf(colour_colour);
  return [code, Blockly.Python.ORDER_ATOMIC];
};