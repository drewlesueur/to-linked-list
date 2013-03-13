var to_linked_list = function (list, list_i, parent_node, current_node) {
	var to_string = Object.prototype.toString
	var is_array = function (a) { return to_string.call(a) == '[object Array]' }
	
	if (!list_i) { list_i = 0}

	if (list_i == list.length) {
		return parent_node
	}

	var item = list[list_i]
	var new_current_node
	if (is_array(item)) {
		new_current_node = [to_linked_list(item, 0, null, null)]
	} else {
		new_current_node = [item]	
	}

	if (!parent_node) {
		parent_node = new_current_node
	} else {
	  current_node.push(new_current_node)
	}
	return to_linked_list(list, list_i + 1, parent_node, new_current_node)
}
    


