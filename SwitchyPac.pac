function FindProxyForURL(url, host)
{
 if (isPlainHostName(host))
  return "DIRECT";

 else if (shExpMatch(host, "*vk.com"))
  return "PROXY 188.166.21.143:80";
 
 else if (shExpMatch(host, "*yadi.sk"))
  return "PROXY 188.166.21.143:80";
}
