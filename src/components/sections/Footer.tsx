import { defineComponent } from "~/utils/preact.ts";

export const Footer = defineComponent(() => {
  return (
    <footer class="bg-primary-300 text-white">
      <div>
        <div class="flex justify-center items-center h-16">
          <p>&copy; 2024 新篠ゆう</p>
        </div>
      </div>
    </footer>
  );
});
