<template>
    <div id="nav">
        <!-- <label for="toggle"> &#9776; </label>
        <input type="checkbox" id="toggle"/> -->
        <div class="navbar">
            <div>
                <router-link class="logo" to="/">
                    <img alt="Sarah logo" src="../assets/logo-sarah-veysset.svg"/>
                </router-link>
            </div>
            <div>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>
        </div>
    </div>
</template>
