import { PostView } from './PostView';

export default {
  title: 'Components / PostView',
  component: PostView,
};

export const Default = () => (
  <PostView
    post={{
      title: 'Awesome First Post',
      contentHtml: '<p>Markdown is the most popular markup language that can be used to format documents. It can be used to create <em>websites</em>,<em>ebooks</em>,<em>email</em>,<em>chats in discussions forums</em>.</p>\n<h2 id=\"topics\">Topics</h2>\n<ol>\n<li><p>Paragraphss\nMD expects a full line space to show texts in a different line else it joins text in the same line.</p>\n</li>\n<li><p>Text decorations\nMD can write <strong>bold</strong> texts, <del>italiic</del> <em>italic</em>  texts</p>\n</li>\n<li><p>Headings\n No of #&#39;s represent the type of heading. Github will automatically add id&#39;s to headings, so the text will be automatically linked. </p>\n<h2 id=\"this-is-h2\">This is h2</h2>\n<h3 id=\"this-is-h3\">This is h3</h3>\n</li>\n<li><p>Links</p>\n<p><a href=\"https://github.com/bhupendra1011\" title=\"all repos\">My Github</a> account.[Bhupendra][1] github repo.</p>\n</li>\n<li><p>Images\n Images can be used just like links. ![Alt txt](img url)</p>\n<p> <img src=\"http://placekitten.com/200/200\" alt=\"&quot;cat Img&quot;\"></p>\n<p> Thumbnails images can also be used which links to larger image \n <a href=\"http://placekitten.com/200/200\"><img src=\"http://placekitten.com/20/20\"></a></p>\n</li>\n<li><p>Ordered and Unordered Lists</p>\n<p> Coding Best Practices:</p>\n<ul>\n<li>Keep code DRY</li>\n<li>Writing Unit Test cases</li>\n<li>Checking cross-browser support</li>\n</ul>\n<p> Steps to merge branch:</p>\n<ol>\n<li>Create a branch from feature</li>\n<li>commit your changes</li>\n<li>push your changes</li>\n<li>raise a pull request</li>\n</ol>\n</li>\n<li><p>Code Blocks</p>\n<p> This is super helpful when posting any code snippet</p>\n</li>\n</ol>\n<pre><code>```js\nconst fn = () =&gt; alert(&quot;some fn&quot;);\n```\n\n\n\n\n```css\n.hide {\n    display:none\n}\n\ntest\n```\n\n\nAlso can show code difference\n\n\n```diff\nvar x = 10;\n- const counter = 0;\n+ let counter = 0\n```\n</code></pre>\n<ol start=\"8\">\n<li><p>Tables </p>\n<p> Tables can be generated with headings and text alignment option</p>\n<table>\n<thead>\n<tr>\n<th align=\"center\">Stocks</th>\n<th align=\"right\">Price</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"center\">TCS</td>\n<td align=\"right\">230</td>\n</tr>\n<tr>\n<td align=\"center\">YES Bank</td>\n<td align=\"right\">500</td>\n</tr>\n</tbody></table>\n</li>\n</ol>\n<p>Cool Tips </p>\n<ul>\n<li><a href=\"https://marketplace.visualstudio.com/items?itemName=znck.grammarly\">Grammarly</a> extension can eliminate typo and grammar mistakes</li>\n<li><a href=\"https://www.screentogif.com/\">ScreenTOGif</a> to record videos in GIF format</li>\n<li>Upload GIF&#39;s to <a href=\"https://giphy.com/\">giphy</a> to embed them into blog posts.</li>\n<li><a href=\"https://stackedit.io/\">Stackedit</a> for Markdown Editing in Browser.</li>\n</ul>\n',
      author: {
        name: 'Oliver Dietsche',
      },
    }}
  />
);
