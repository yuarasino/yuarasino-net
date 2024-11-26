import { defineComponent } from "../utils/preact.ts";
import { tw } from "../utils/tailwind.ts";

export default defineComponent(() => {
  return (
    <footer class={tw`bg-primary-300 text-white`}>
      <div class={tw`flex flex-col gap-4`}>
        <div class={tw`flex justify-center h-16 p-2`}>
          <p class={tw`p-3`}>
            <span
              class={tw`
                inline-block
                first-letter:font-sans
              `}
            >
              &copy; 2025 新篠ゆう
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
});
