
## Welcome to my Code Garden

You can use the [editor on GitHub](https://github.com/960761/myCodeGarden/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

### my Demo
[FCC-responsive web design page demo](https://github.com/960761/myCodeGarden/tree/master/FreeCodeCamp/responsiveWebDesign/)

[FCC-JS algorithm and data structure demo](https://github.com/960761/myCodeGarden/tree/master/FreeCodeCamp/JS_AlgorithmAndDataStructure/)

[MDN-CSS](https://github.com/960761/myCodeGarden/tree/master/MDN/LearningAear/css/)

[baiduIFE](https://github.com/960761/myCodeGarden/tree/master/baiduIFE/)

### lists of notes


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>


