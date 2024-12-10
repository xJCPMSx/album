new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/cat couple.jpg",
          img2: "images/cat couple2.jpg",
          img3: "images/cat couple3.jpg",
          title: "Na praia",
          isOpen: false,
        },
        {
          img1: "images/cat cute.jpg",
          img2: "images/cat cute 2.jpg",
          img3: "images/cat cute 3.jpg",
          title: "No quarto",
          isOpen: false,
        },
        {
          img1: "images/cat baby2.jpg",
          img2: "images/cat baby.jpg",
          img3: "images/cat baby3.jpg",
          title: "De role",
          isOpen: false,
        },
        {
          img1: "images/cat sleep.jpg",
          img2: "images/cat sleep2.jpg",
          img3: "images/cat sleep 3.jpg",
          title: "De fofura",
          isOpen: false,
        },
        {
          img1: "images/CAT HERO1.jpg",
          img2: "images/cat hero2.jpg",
          img3: "images/cat hero3.jpg",
          title: "1° Encontro",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
