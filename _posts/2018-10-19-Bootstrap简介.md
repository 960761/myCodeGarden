Bootstrap 是一个前端框架，可以自动检测screen尺寸，并自适应改变网页及元素大小，因此可以用来设计responsive web pages and applications。
Bootstrap的基础是，使用了一个 responsive 12-column-grid layout, 而且针对buttons, images, forms, navigation都有各自针对性的类。

Bootstrap实质是使用CSS实现的一系列的类，我们通过给元素设置成这些类来使用。

Bootstrap 如何使用并不困难，难点在于如何全面了解所有的bootstrap，在需要的时候使用对应的类来实现。

### 1.	如何使用
在head中添加以下html,就可以使用

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

### 2.	总体布局 常用class
常用： container-fluid, row, col-md-*, col-xs-*
这些通常都应用于div上面，其中md: medium size,  xs: extra small， *表示column width，
这些都是基于12-column-grid system，经常是 div + class:row + col-md/xs-*结合使用。
Image: img-responsive
Text: text-center

### 3.	Button常用class
任何按钮类都要结合btn使用
btn btn-default, btn-block: 占据整行宽度
btn-primary: necessary actions user can take
btn-info: optional actions user can take
btn-danger: notify a destructive action

### 4.	Icon 库
Font Awesome是一个icon库，也是通过link来使用。
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous">

具体使用为 <i class = “fa fa-thumbs-up”></i>
其他如： fa-info-circle, fa-trash 
注意，都要结合 fa 使用。

### 5.	Layout demo code
以下为使用bootstrap的常规布局代码
其中，给每个元素添加class or id并非只是为了CSS，有时候是为了jQuery定位。

~~~
<!--only change code above this line-->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
~~~ 
以上代码生成过程参考：
https://learn.freecodecamp.org/front-end-libraries/bootstrap/create-a-bootstrap-headline/

### 6.	参考及学习
w3school bootstrap参考：
https://www.w3schools.com/bootstrap/default.asp
