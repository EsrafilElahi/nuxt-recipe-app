<script setup>

</script>

<template>
  <div>
    <div>
      <div>
        <span>Iralian</span>
        <span>with features</span>
      </div>

      <span>see all</span>
    </div>

    <div>
      <Card style="width: 25rem; overflow: hidden">
        <template #header>
          <img alt="user header"
            src="https://thumbs.dreamstime.com/b/single-sushi-maki-above-salmon-avocado-white-background-image-focuses-structure-colors-ingredients-383015712.jpg" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
