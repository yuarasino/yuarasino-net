import { defineComponent } from "~/utils/preact.ts";

export const Profile = defineComponent(() => {
  return (
    <section class="min-h-screen pt-16" id="profile">
      <div class="max-w-screen-clamp mx-auto p-4">
        <h2 class="uppercase">profile</h2>
      </div>
    </section>
  );
});
