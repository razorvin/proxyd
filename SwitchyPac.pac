function FindProxyForURL(url, host)
{
 if (isPlainHostName(host))
 {
  return "DIRECT";
 }
 else if (shExpMatch(host, "*vk.com"))
 {
  return "PROXY 52.77.193.180:8888";
 }
 else if (shExpMatch(host, "*yadi.sk"))
 {
  return "PROXY 52.77.193.180:8888";
 }
 else if (shExpMatch(host, "*mail.ru"))
 {
  return "PROXY 52.77.193.180:8888";
 }
  else if (shExpMatch(host, "*yandex.com"))
 {
  return "PROXY 52.77.193.180:8888";
 }
}
