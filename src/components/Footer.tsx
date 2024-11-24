import { defineComponent } from "../utils/define.ts";

export default defineComponent(() => {
  return (
    <footer class="bg-primary-300 text-white font-display">
      <div class="flex justify-center items-center h-16">
        <div class="flex p-3">
          <p class="p-2">
            <span class="block">&copy; 2025 新篠ゆう</span>
          </p>
        </div>
      </div>
    </footer>
  );
});
