import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import search from '@/components/search'
import singer from '@/components/singer'
import sort from '@/components/sort'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '',
      component: recommend
    },
	{
      path: '/recommend',
      component: recommend
    } ,   
	{
      path: '/search',
      component: search
    }  ,  
	{
      path: '/sort',
      component: sort
    } ,  
	{
      path: '/singer',
      component: singer
    } 
  ]
})
