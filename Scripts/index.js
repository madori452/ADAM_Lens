(function() {
  var imageReveal;

  imageReveal = class imageReveal {
    constructor(el) {
      this._bindEvents = this._bindEvents.bind(this);
      this.startReveal = this.startReveal.bind(this);
      this.resetReveal = this.resetReveal.bind(this);
      this.calculateSplit = this.calculateSplit.bind(this);
      this.moveSplit = this.moveSplit.bind(this);
      this.el = el;
      this.overSlide = this.el.find('.js-over-slide');
      this.overImage = this.el.find('.js-over-image');
      this.divider = this.el.find('.js-divider');
      // bind those thangs
      console.log(this.el);
      this._bindEvents();
      this.resetReveal();
    }

    _bindEvents() {
      this.el.on('mouseenter', this.startReveal);
      this.el.on('mouseenter', this.startReveal);



      return this.el.on('mouseleave', this.resetReveal);
    }

    startReveal() {
      console.log('start reveal');
      return this.el.on('mousemove', this.calculateSplit);

    }

    resetReveal() {
      var elMiddle;
      console.log('reset');
      this.el.off('mousemove', this.calculateSplit);




      elMiddle = this.el.width() / 2;
      return this.moveSplit(elMiddle);
    }

    calculateSplit(e) {
      var elOffset;
      elOffset = this.el.offset().left;
      //console.log elOffset
      //console.log e
      return this.moveSplit(e.pageX - elOffset);
    }

    moveSplit(offset) {
      if (offset < 0) {
        offset = 0;
      }
      console.log(offset);
      this.overSlide.css('transform', 'translateX(' + offset + 'px)');
      this.overImage.css('transform', 'translateX(-' + offset + 'px)');
      return this.divider.css('transform', 'translateX(' + offset + 'px)');
    }

  };

  //export the goods
  window.imageReveal = imageReveal;

  $(function() {
    return new imageReveal($('#phantom .js-image-reveal'))
  });
  $(function() {
    return new imageReveal($('#Mavic .js-image-reveal'))
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFNLGNBQU4sTUFBQSxZQUFBO0lBQ0UsV0FBYSxHQUFBLENBQUE7VUFXYixDQUFBLGtCQUFBLENBQUE7VUFLQSxDQUFBLGtCQUFBLENBQUE7VUFNQSxDQUFBLGtCQUFBLENBQUE7VUFPQSxDQUFBLHFCQUFBLENBQUE7VUFPQSxDQUFBLGdCQUFBLENBQUE7TUFwQ2MsSUFBQyxDQUFBO01BQ2IsSUFBQyxDQUFBLFNBQUQsR0FBYSxJQUFDLENBQUEsRUFBRSxDQUFDLElBQUosQ0FBUyxnQkFBVDtNQUNiLElBQUMsQ0FBQSxTQUFELEdBQWEsSUFBQyxDQUFBLEVBQUUsQ0FBQyxJQUFKLENBQVMsZ0JBQVQ7TUFDYixJQUFDLENBQUEsT0FBRCxHQUFXLElBQUMsQ0FBQSxFQUFFLENBQUMsSUFBSixDQUFTLGFBQVQsRUFGWDs7TUFLQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUMsQ0FBQSxFQUFiO01BQ0EsSUFBQyxDQUFBLFdBQUQsQ0FBQTtNQUNBLElBQUMsQ0FBQSxXQUFELENBQUE7SUFSVzs7SUFXYixXQUFhLENBQUEsQ0FBQTtNQUNYLElBQUMsQ0FBQSxFQUFFLENBQUMsRUFBSixDQUFPLFlBQVAsRUFBcUIsSUFBQyxDQUFBLFdBQXRCO2FBQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxFQUFKLENBQU8sWUFBUCxFQUFxQixJQUFDLENBQUEsV0FBdEI7SUFGVzs7SUFLYixXQUFhLENBQUEsQ0FBQTtNQUNYLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjthQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsRUFBSixDQUFPLFdBQVAsRUFBb0IsSUFBQyxDQUFBLGNBQXJCO0lBRlc7O0lBTWIsV0FBYSxDQUFBLENBQUE7QUFDWCxVQUFBO01BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaO01BQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxHQUFKLENBQVEsV0FBUixFQUFxQixJQUFDLENBQUEsY0FBdEI7TUFDQSxRQUFBLEdBQVcsSUFBQyxDQUFBLEVBQUUsQ0FBQyxLQUFKLENBQUEsQ0FBQSxHQUFjO2FBQ3pCLElBQUMsQ0FBQSxTQUFELENBQVcsUUFBWDtJQUpXOztJQU9iLGNBQWdCLENBQUMsQ0FBRCxDQUFBO0FBQ2QsVUFBQTtNQUFBLFFBQUEsR0FBVyxJQUFDLENBQUEsRUFBRSxDQUFDLE1BQUosQ0FBQSxDQUFZLENBQUMsS0FBeEI7OzthQUdBLElBQUMsQ0FBQSxTQUFELENBQVksQ0FBQyxDQUFDLEtBQUYsR0FBVSxRQUF0QjtJQUpjOztJQU9oQixTQUFXLENBQUMsTUFBRCxDQUFBO01BQ1QsSUFBRyxNQUFBLEdBQVMsQ0FBWjtRQUFtQixNQUFBLEdBQVMsRUFBNUI7O01BRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaO01BQ0EsSUFBQyxDQUFBLFNBQVMsQ0FBQyxHQUFYLENBQWUsV0FBZixFQUE0QixhQUFBLEdBQWdCLE1BQWhCLEdBQXlCLEtBQXJEO01BQ0EsSUFBQyxDQUFBLFNBQVMsQ0FBQyxHQUFYLENBQWUsV0FBZixFQUE0QixjQUFBLEdBQWlCLE1BQWpCLEdBQTBCLEtBQXREO2FBQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxHQUFULENBQWEsV0FBYixFQUEwQixhQUFBLEdBQWdCLE1BQWhCLEdBQXlCLEtBQW5EO0lBTlM7O0VBckNiLEVBQUE7OztFQStDQSxNQUFNLENBQUMsV0FBUCxHQUFxQjs7RUFHckIsQ0FBQSxDQUFFLFFBQUEsQ0FBQSxDQUFBO1dBQ0EsSUFBSSxXQUFKLENBQWdCLENBQUEsQ0FBRSxrQkFBRixDQUFoQjtFQURBLENBQUY7QUFsREEiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBpbWFnZVJldmVhbFxuICBjb25zdHJ1Y3RvcjogKEBlbCkgLT5cbiAgICBAb3ZlclNsaWRlID0gQGVsLmZpbmQgJy5qcy1vdmVyLXNsaWRlJ1xuICAgIEBvdmVySW1hZ2UgPSBAZWwuZmluZCAnLmpzLW92ZXItaW1hZ2UnXG4gICAgQGRpdmlkZXIgPSBAZWwuZmluZCAnLmpzLWRpdmlkZXInXG5cbiAgICAjIGJpbmQgdGhvc2UgdGhhbmdzXG4gICAgY29uc29sZS5sb2cgQGVsXG4gICAgQF9iaW5kRXZlbnRzKClcbiAgICBAcmVzZXRSZXZlYWwoKVxuXG4gICAgXG4gIF9iaW5kRXZlbnRzOiA9PlxuICAgIEBlbC5vbiAnbW91c2VlbnRlcicsIEBzdGFydFJldmVhbFxuICAgIEBlbC5vbiAnbW91c2VsZWF2ZScsIEByZXNldFJldmVhbFxuXG4gICAgXG4gIHN0YXJ0UmV2ZWFsOiA9PlxuICAgIGNvbnNvbGUubG9nICdzdGFydCByZXZlYWwnXG4gICAgQGVsLm9uICdtb3VzZW1vdmUnLCBAY2FsY3VsYXRlU3BsaXRcbiAgICBcbiAgICBcbiAgICBcbiAgcmVzZXRSZXZlYWw6ID0+XG4gICAgY29uc29sZS5sb2cgJ3Jlc2V0J1xuICAgIEBlbC5vZmYgJ21vdXNlbW92ZScsIEBjYWxjdWxhdGVTcGxpdFxuICAgIGVsTWlkZGxlID0gQGVsLndpZHRoKCkgLyAyXG4gICAgQG1vdmVTcGxpdChlbE1pZGRsZSlcbiAgICBcbiAgICBcbiAgY2FsY3VsYXRlU3BsaXQ6IChlKSA9PlxuICAgIGVsT2Zmc2V0ID0gQGVsLm9mZnNldCgpLmxlZnRcbiAgICAjY29uc29sZS5sb2cgZWxPZmZzZXRcbiAgICAjY29uc29sZS5sb2cgZVxuICAgIEBtb3ZlU3BsaXQoIGUucGFnZVggLSBlbE9mZnNldCApXG4gICAgXG4gICAgXG4gIG1vdmVTcGxpdDogKG9mZnNldCkgPT5cbiAgICBpZiBvZmZzZXQgPCAwIHRoZW4gb2Zmc2V0ID0gMFxuICAgIFxuICAgIGNvbnNvbGUubG9nIG9mZnNldFxuICAgIEBvdmVyU2xpZGUuY3NzICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgb2Zmc2V0ICsgJ3B4KSdcbiAgICBAb3ZlckltYWdlLmNzcyAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLScgKyBvZmZzZXQgKyAncHgpJ1xuICAgIEBkaXZpZGVyLmNzcyAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArIG9mZnNldCArICdweCknXG5cblxuI2V4cG9ydCB0aGUgZ29vZHNcbndpbmRvdy5pbWFnZVJldmVhbCA9IGltYWdlUmV2ZWFsXG5cblxuJCAtPlxuICBuZXcgaW1hZ2VSZXZlYWwoJCgnLmpzLWltYWdlLXJldmVhbCcpKVxuIl19
//# sourceURL=coffeescript