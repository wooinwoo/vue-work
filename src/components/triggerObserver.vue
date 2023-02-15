<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default defineComponent({
  setup(props, { emit }) {
    const trigger = ref();
    const options = {
      root: null,
      threshold: 1, //감지 범위
    };
    let observer: any = null;
    const handleIntersect = (entry: any) => {
      setTimeout(function () {
        if (entry.isIntersecting) emit("triggerIntersected", trigger.value);
      }, 1000);
    };

    onMounted(() => {
      try {
        observer = new IntersectionObserver((entries) => {
          handleIntersect(entries[0]);
        }, options);
        observer.observe(trigger.value);
        console.log(1);
      } catch (err) {
        console.error(err);
      }
    });

    onUnmounted(() => {
      observer.disconnect();
      // console.log("@unmounted => ", observer)
    });

    return {
      trigger,
    };
  },
});
</script>

<template>
  <!-- <div ref="trigger" class="loading">@로딩 중@</div> -->
  <div ref="trigger" class="spinner-container">
    <div class="spinner" />
  </div>
</template>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.spinner {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid #e0e0e0;
  border-bottom: 5px solid gray;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
