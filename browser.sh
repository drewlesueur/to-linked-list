#!/usr/bin/env bash

code=`cat to_linked_list.js`
tests=`cat to_linked_list_test.js`

html=$(cat <<HTML
<script>
$code
$tests
</script>
HTML
)

echo "$html" > tests.html


