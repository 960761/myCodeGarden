
参考：https://zhuanlan.zhihu.com/p/31210294  

Javascript中有以下几个固有对象，可以直接拿来使用的：  
~~~
window
location
navigator
history
screen
~~~

### 代码刷新：
借助这几个原始对象来实现代码刷新页面：  
~~~
1.	window
window.navigate(location);

2.	location
location.reload() 
参数： bForceGet， 可选参数， 默认为 false，从客户端缓存里取当前页。
      true, 则以 GET 方式，从服务端取最新的页面, 相当于客户端点击 F5("刷新")

location.replace(location) 
location.replace(document.referrer);  document.referrer //前一个页面的URL
ocation=location
location.assign(location)

3.	history
  history.go(0)
  
4.	document
document.execCommand('Refresh') 
document.URL=location.href
~~~
### 自动刷新：

1，页面自动刷新：  
把如下代码加入<head>区域中  
~~~
<meta http-equiv="refresh" content="20"> 
~~~
其中20指每隔20秒刷新一次页面.  

2，页面自动跳转：  
把如下代码加入<head>区域中  
~~~
<meta http-equiv="refresh" content="20;url=http://www.jb51.net">  
~~~
其中20指隔20秒后跳转到http://www.jb51.net页面  

3，页面自动刷新js版  
~~~
<script language="JavaScript">  
function myrefresh()  
{
    window.location.reload();
}
setTimeout('myrefresh()',1000); //指定1秒刷新一次
</script>
~~~
