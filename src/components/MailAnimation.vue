<template>
    <div class="mail-animation">
        <a href="mailto:veysset.sarah@gmail.com" :class="textColor">
            <span>
            veysset.sarah@gmail.com
            </span>
        </a>
    </div>
</template>

<script>
export default {
  name: 'MailAnimation',
  props: {
    textColor: String,
  },
};
</script>
