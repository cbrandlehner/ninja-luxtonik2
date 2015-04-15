exports.menu = {
  "contents":[
    { "type": "paragraph", "text": "Welcome to the Ninja Luxtronik2 Monitor"},
    { "type": "paragraph", "text": "You can choose how often you want the data to be updated (in seconds). \n\rThe default value is 10 seconds."},
    { "type": "input_field_text", "field_name": "poll_interval", "value": "10", "label": "Update Interval", "required": true},
    { "type": "input_field_text", "field_name": "IP", "value": "192.168.71.100", "label": "Luxtronik IP", "required": true},
    { "type": "input_field_text", "field_name": "Port", "value": "8888", "label": "Port", "required": true},
    { "type": "submit", "name": "Save", "rpc_method": "echo" },
  ]
};

exports.echo = {
  "contents":[
    { "type": "paragraph", "text": "Settings saved!" }
  ]
};
