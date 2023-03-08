<template>
    <div>
        <main>
            <div class="container">

                <ul>
                    <li v-for="movie in store.movies" :key="movie.id">

                        <h2>
                            {{ movie.title }}
                        </h2>

                        <h2>
                            {{ movie.title }}
                        </h2>

                        <h2>
                            {{ movie.title }}
                        </h2>

                    </li>
                </ul>
            </div>



        </main>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
}
</style>