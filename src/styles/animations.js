import { gsap } from 'gsap';

const timeline = gsap.timeline();

const animations = {
  renderPageElements() {
    return timeline
      .from('.page-title', {
        duration: .5,
        opacity: 0,
        y: 100
      })
      .from('.page-title-shadow', {
        duration: .75,
        opacity: 0,
        y: 100
      }, '<')
      .from('.turkey-logo', {
        duration: .5,
        opacity: 0,
        x: -100
      })
      .from('.generate', {
        duration: .35,
        opacity: 0
      })
      .from('.saved', {
        duration: .75,
        opacity: 0
      })
      .from('.menu', {
        duration: .35,
        opacity: 0,
        x: 100
      })
      .from('.recent-facts-container', {
        duration: .5,
        opacity: 0,
        y: 100
      })
      .from('.recent-facts__header', {
        duration: .35,
        opacity: 0
      })
      .from('.no-recents-message__info', {
        duration: .35,
        opacity: 0
      })
      .from('.no-recents-message__cta', {
        duration: .35,
        opacity: 0
      })
      .from('.current-fact__container', {
        duration: 1.25,
        opacity: 0
      })
      .from('.current-fact__did-you-know', {
        duration: .25,
        opacity: 0
      })
      .from('.current-fact__text', {
        duration: .25,
        opacity: 0
      })
  },

  renderLoadingMessage() {
    return timeline
      .from('.loading-message', {
        duration: 1,
        opacity: 0,
        y: '+= 20'
      }, '<')
  },

  renderRecentFacts() {
    return timeline
      // .from('.recent-fact-1__container', {
      //   duration: .25,
      //   opacity: 0
      // })
      .from('.recent-fact-1__text', {
        duration: .35,
        opacity: 0,
        x: '+= 50',
        y: '-= 20'
      })
      // .from('.recent-fact-2__container', {
      //   duration: .25,
      //   opacity: 0
      // })
      .from('.recent-fact-2__text', {
        duration: .35,
        opacity: 0,
        x: '+= 50',
        y: '-= 20'
      })
      // .from('.recent-fact-3__container', {
      //   duration: .25,
      //   opacity: 0
      // })
      .from('.recent-fact-3__text', {
        duration: .35,
        opacity: 0,
        x: '+= 50',
        y: '-= 20'
      })
  },

  hideRecentFacts() {
    return timeline
      .from('.recent-fact-1__container', {
        duration: 0,
        opacity: 1
      })
      .from('.recent-fact-2__container', {
        duration: 0,
        opacity: 1
      }, '<')
      .from('.recent-fact-3__container', {
        duration: 0,
        opacity: 1
      }, '<')
  }
}


export default animations;
