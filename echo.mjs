
function layoutWith(content){
  return (`
<!DOCTYPE html>
<html lang="es">
<body>
  <pre>
${content}
  </pre>
</body>
</html>
  `)
}

function fields(req) {
  const body = req.body
  let res = ''

  for(let field in body){
    res += `Field name:${field} Field value:-${body[field]}-\n` 
  }

  return res
}

function echoFields(req) {
  const content = `
Form method: ${req.method}\n\n
${fields(req)}
  `
  return layoutWith(content)
}

export default echoFields