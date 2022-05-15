import React from 'react'

function StatusIcon(props: { order: any }) {
  const { order } = props

  const Success =
      'https://www.svgrepo.com/show/395713/accept-mark-check-tick.svg',
    // Canceled = 'https://www.svgrepo.com/show/395697/cancel-remove-delete-cross.svg',
    Delivered =
      'https://www.svgrepo.com/show/395714/email-message-mail-envelope.svg',
    PendingPay =
      'https://www.svgrepo.com/show/395737/sync-refresh-loading-load.svg',
    // PendingPreOrder = 'https://www.svgrepo.com/show/395704/store-shop-shopping-bag.svg',
    PendingPreparation =
      'https://www.svgrepo.com/show/395740/like-award-favorite-star.svg'
  // Problem = 'https://www.svgrepo.com/show/395724/focus-aim-goal-target.svg'

  const iconSrc =
    order[9] === 'TRUE'
      ? Success
      : order[7] === 'TRUE'
      ? Delivered
      : order[6] != '0'
      ? PendingPay
      : PendingPreparation

  return (
    <div>
      <img src={iconSrc} className="h-[2rem] w-[2rem]" />
    </div>
  )
}

export default StatusIcon
