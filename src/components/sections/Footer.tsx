import { defineComponent } from "~/utils/preact.ts";
import { tw } from "~/utils/tailwind.ts";

export default defineComponent(() => {
  return (
    <footer class={tw`bg-primary-300 text-white`}>
      <div class={tw`flex flex-col`}>
        <div class={tw`flex justify-center items-center h-16`}>
          <p>
            <small>&copy; 2025 新篠ゆう</small>
          </p>
        </div>
      </div>
    </footer>
  );
});
