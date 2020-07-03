import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import VueRouter from "vue-router"
import Home from '@/views/Home.vue'
import Video from '@/views/Video.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

const movie = {
    title: "Parasite",
    poster: "http://hybridtv.ss7.tv/techtest/assets/posters/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    video: "http://p.demo.flowplayer.netdna-cdn.com/vod/demo.flowplayer/bbb-800.mp4"
};


describe('TestApp', () => {

    describe('Home.vue', () => {
        const wrapper = shallowMount(Home, {
            propsData: {},
        })
        it('Renders', () => {
            expect(wrapper.exists()).toBe(true);
        })
        it('Loads our movies', async () => {
            const movies = await wrapper.vm.loadMovies();
            expect(movies.length).toBeGreaterThan(0);
        })
        it('Routes a video', async () => {
            router.push("/video")
            await wrapper.vm.$nextTick()
        })
    })

    describe('Video.vue', () => {
        const $router = {
            params: {
                movie
            }
        };
        const wrapper = shallowMount(Video, {
            localVue,
            router,
            mocks: {
                $router
            },
            propsData: {
                options: {
                    poster: movie.poster,
                    sources: [
                        movie.poster
                    ] 
                }
            }
        })        
        it('Renders', () => {
            expect(wrapper.exists()).toBe(true);
        })
        it('Click Play and Pause', () => {
            setTimeout(() => {
                const result = wrapper.vm.play();
                expect(result).toBe(true);    
                setTimeout(() => {
                    const result = wrapper.vm.pause();
                    expect(result).toBe(true);    
                }, 3000);    
            }, 3000);
        })
    })

})
