<template>
    <div>
        <header>
            <div class="container">
                <div>

                </div>
            </div>



        </header>


        <div>

            <input type="text" placeholder="Inserisci testo" @keyup.enter="$emit('onSearch')" v-model="store.search">
            <button>Cerca</button>
        </div>
    </div>
</template>

<script>
import store from '../store';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>

