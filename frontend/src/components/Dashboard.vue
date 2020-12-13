<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">대시보드</h1>

    <v-container class="my-5">
          
        <v-card hover class="pa-3" v-for="project in projects" :key="project.title">
        
            <v-layout row wrap :class="`pa-3 project`">
              <v-flex xs12 md6>
                <div class="caption grey--text">제목</div>
                <div>{{ project.title }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">작성자</div>
                <div>{{ project.person }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">만료 기간</div>
                <div>{{ project.due }}</div>
              </v-flex>
              <v-flex xs2 sm4 md2>
                <div class="caption grey--text">상태</div>
                <div>
                  <v-chip small :color="`${project.status}`" :class="`${project.status} v-chip--active white--text caption my-2`">{{ statusToKorean(project.status) }}</v-chip>
                </div>
              </v-flex>
            </v-layout>
        </v-card>

      </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'TODO', person: '성건희', due: '2020-12-13 10:00', status: 'ongoing'},
        { title: '프로그래밍 학습', person: '김길종', due: '2020-12-12 15:30', status: 'overdue'},
        { title: '스타크래프트 연습', person: '박수환', due: '2020-12-13 23:59', status: 'complete'},
      ]
    }
  },
  methods: {
    statusToKorean(status) {
      if (status === 'overdue') {
        return "기한만료";
      }
      if (status === 'ongoing') {
        return "진행중";
      }
      if (status === 'complete') {
        return "완료";
      }
    }
  },
  computed: {
    
  }
}
</script>

<style>
.v-chip.overdue {
  background: tomato;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.complete {
  background: #3cd1c2;
}
</style>