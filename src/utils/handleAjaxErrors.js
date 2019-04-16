export const handleAjaxErrors = (error) => {
  const errorStatus = (error || {}).status

  if (errorStatus === 401) {
    console.log('Não autorizado')
  }
}
