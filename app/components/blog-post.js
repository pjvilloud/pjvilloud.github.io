import Component from '@ember/component';
import computed from "@ember/objects";
import $ from "jquery";

export default Component.extend({
  text: null,
  header: null,
  readMore: null,
  didUpdateAttrs() {
    $.get("posts/" + this.get('mdFile') + ".md", data => {
      this.set('fileContent', data);
      let parts = data.split('---');
      this.set('header', JSON.parse(parts[0]));
      let morePosition = parts[1].indexOf("[MORE]");
      if (this.get('type') === "excerpt" && morePosition > 0) {
        this.set('text', parts[1].substr(0, morePosition));
        this.set('readMore', true);
      } else {
        this.set('text', parts[1].replace("[MORE]", ""));
      }
    });
  },
  fullUrl: computed("mdFile", function() {
    return "http://feedes.fr/post/" + this.get('mdFile');
  })
});
