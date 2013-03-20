test_array = [
  "name", "drew",
  ["likes", "computer", "and", ["video making", "and"], "being a dad"],
	"fun!"
]

linked_list = to_linked_list(test_array)
console.log(linked_list)
console.log(JSON.stringify(linked_list))

expected = '["name",["drew",[["likes",["computer",["and",[["video making",["and"]],["being a dad"]]]]],["fun!"]]]]'
if (JSON.stringify(linked_list) == expected) {
	console.log("test passed")
} else {
  console.log("test failed")
	console.log(expected)
}
