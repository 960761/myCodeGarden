
1.	对元素使用多个类便于响应式设计  
这里对column使用两个class，用来实现responsive design的做法值得借鉴；
2.	使用box-sizing: border-box; 消除padding, border对布局的影响。  
对column使用box-sizing: border-box; 是最关键的一步，否则的话，padding和border会严重影响布局；
3.	解决float高度塌陷，也即让float父元素可以包裹float元素的方法，  
```
.row:after, .row:before {
   content: “”;
   display: block;
   clear: both; 
}
```
