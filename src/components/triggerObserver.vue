<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
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
  <div ref="trigger" class="loading">@로딩 중@</div>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
}
</style>
