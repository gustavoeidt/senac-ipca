export const getMonth = (date) => {
  if (date.match(`[0-9]{2}/01/[0-9]{4}`)) return "Janeiro";
  if (date.match(`[0-9]{2}/02/[0-9]{4}`)) return "Fevereiro";
  if (date.match(`[0-9]{2}/03/[0-9]{4}`)) return "Março";
  if (date.match(`[0-9]{2}/04/[0-9]{4}`)) return "Abril";
  if (date.match(`[0-9]{2}/05/[0-9]{4}`)) return "Maio";
  if (date.match(`[0-9]{2}/06/[0-9]{4}`)) return "Junho";
  if (date.match(`[0-9]{2}/07/[0-9]{4}`)) return "Julho";
  if (date.match(`[0-9]{2}/08/[0-9]{4}`)) return "Agosto";
  if (date.match(`[0-9]{2}/09/[0-9]{4}`)) return "Setembro";
  if (date.match(`[0-9]{2}/10/[0-9]{4}`)) return "Outubro";
  if (date.match(`[0-9]{2}/11/[0-9]{4}`)) return "Novembro";
  if (date.match(`[0-9]{2}/12/[0-9]{4}`)) return "Dezembro";
  return date;
};
