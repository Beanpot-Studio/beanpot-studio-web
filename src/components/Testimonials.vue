<script setup>
import { ref, onMounted } from 'vue';

const testimonials = [
  {
    quote: "Beanpot Studio transformed our classroom experience. The interactive tools have increased student engagement by 60% and improved test scores across all subjects.",
    author: "Dr. Sarah Johnson",
    position: "Principal, Westfield Academy",
    avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=80"
  },
  {
    quote: "As a computer science teacher, I've tried dozens of educational platforms. None compare to what we built with Beanpot Studio. My students are more engaged than ever.",
    author: "Michael Chen",
    position: "CS Teacher, Tech High School",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=80"
  },
  {
    quote: "The analytics dashboard has given us unprecedented insights into student learning patterns. We've been able to identify and address gaps in understanding immediately.",
    author: "Emma Rodriguez",
    position: "Director of Curriculum, Western University",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80"
  }
];

const currentTestimonial = ref(0);
const intervalId = ref(null);

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length;
  resetInterval();
};

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.length) % testimonials.length;
  resetInterval();
};

const setTestimonial = (index) => {
  currentTestimonial.value = index;
  resetInterval();
};

const resetInterval = () => {
  clearInterval(intervalId.value);
  startInterval();
};

const startInterval = () => {
  intervalId.value = setInterval(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length;
  }, 8000);
};

onMounted(() => {
  startInterval();
});
</script>

<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4">
          Success Stories
        </span>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Hear from our educator community
        </h2>
        <p class="text-lg text-slate-600">
          Discover how educators are transforming learning experiences with our platform.
        </p>
      </div>

      <div class="max-w-4xl mx-auto relative px-6">
        <!-- Testimonial Carousel -->
        <div class="relative">
          <div class="overflow-hidden">
            <div 
              class="transition-all duration-500 ease-in-out flex"
              :style="`transform: translateX(-${currentTestimonial * 100}%)`"
            >
              <div 
                v-for="(testimonial, index) in testimonials" 
                :key="index"
                class="w-full flex-shrink-0 px-4"
              >
                <div class="relative bg-slate-50 rounded-xl p-8 shadow-soft">
                  <div class="absolute -top-4 left-10 text-5xl text-primary-300">"</div>
                  
                  <p class="text-lg text-slate-700 mb-6 relative z-10">
                    {{ testimonial.quote }}
                  </p>
                  
                  <div class="flex items-center">
                    <img 
                      :src="testimonial.avatar" 
                      :alt="testimonial.author"
                      class="w-12 h-12 rounded-full mr-4 object-cover" 
                    />
                    <div>
                      <h4 class="font-semibold text-slate-900">{{ testimonial.author }}</h4>
                      <p class="text-sm text-slate-600">{{ testimonial.position }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <button 
            class="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            @click="prevTestimonial"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            class="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            @click="nextTestimonial"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <!-- Indicators -->
        <div class="flex justify-center space-x-2 mt-8">
          <button 
            v-for="(_, index) in testimonials" 
            :key="index"
            @click="setTestimonial(index)"
            :class="[
              'w-2.5 h-2.5 rounded-full transition-all duration-300',
              currentTestimonial === index ? 'bg-primary-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
            ]"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>